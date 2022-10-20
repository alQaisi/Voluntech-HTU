import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  BrowserRouter } from 'react-router-dom';
import { supabase } from "../utils/supabase.utils";
import { setUser,setNotification } from '../store/user/user.actions';
import App from '../App';

function AppWrapped(){
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user.user);
    useEffect(()=>{
        const session = supabase.auth.session();
        dispatch(setUser(session?.user ?? null));
        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if(!session?.user)
                    return dispatch(setUser(null,"CLEAR_IMAGE"))
                dispatch(setUser(session.user));            
            }
        );
        return () => {
            listener?.unsubscribe();            
        }
    },[dispatch]);
    useEffect(()=>{
        if(user){
            if(user.user_metadata.type==="user"){
                supabase
                .from(`applicants:uid=eq.${user.id}`)
                .on("*",(payload)=>{
                    if(payload.eventType==="DELETE")
                        return dispatch(setNotification({type:"delete",message:"A company has not selected your application \n refresh your dashboard to see the updates"}));
                    if(payload.eventType==="UPDATE")
                        return dispatch(setNotification({type:"normal",message:`A company has selected your application \n refresh your dashboard to see the updates`}));
                }).subscribe();
            }
            if(user.user_metadata.type==="company"){
                supabase
                .from(`applicants:cid=eq.${user.id}`)
                .on("*",(payload)=>{
                    if(payload.eventType==="DELETE")
                        return dispatch(setNotification({type:"delete",message:"A user has canceld their application \n refresh your activity page to see the updates"}));
                    if(payload.eventType==="INSERT")
                        return dispatch(setNotification({type:"normal",message:`A user has applyed to one of your activities \n refresh your activity page to see the updates`}));
                }).subscribe();
            }
        }
        return ()=>{
            supabase.removeAllSubscriptions();
        }
    },[user,dispatch]);
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}
export default AppWrapped;