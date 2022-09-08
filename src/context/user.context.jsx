import { useState,useEffect,createContext } from "react";
import {supabase,signUp as signUpHelper,signIn as signInHelper,signInWithEmail as signInWithEmailHelper,update as updateHelper } from '../utils/supabase.utils';

export const UserContext=createContext({});

function UserProvider({children}){

    const [OuterLoadingType,setOuterLoadingType]=useState();
    const [user,setUser]=useState();
    const [imageUrl,setImageUrl]=useState();
    const [errorMessage,setErrorMessage]=useState();
    const [notification,setNotification]=useState();
    
    useEffect(()=>{
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null)
            }
        );
        return () => {
            listener?.unsubscribe()
        }
    },[]);
    
    useEffect(()=>{
        if(user){
            if(user.user_metadata.type==="user"){
                supabase
                .from(`applicants:uid=eq.${user.id}`)
                .on("*",(payload)=>{
                    if(payload.eventType==="DELETE")
                        return setNotification({type:"delete",message:"A company has not selected your application \n refresh your dashboard to see the updates"});
                    if(payload.eventType==="UPDATE")
                        return setNotification({type:"normal",message:`A company has selected your application \n refresh your dashboard to see the updates`});
                }).subscribe();
            }
            if(user.user_metadata.type==="company"){
                supabase
                .from(`applicants:cid=eq.${user.id}`)
                .on("*",(payload)=>{
                    if(payload.eventType==="DELETE")
                        return setNotification({type:"delete",message:"A user has canceld their application \n refresh your activity page to see the updates"});
                    if(payload.eventType==="INSERT")
                        return setNotification({type:"normal",message:`A user has applyed to one of your activities \n refresh your activity page to see the updates`});
                }).subscribe();
            }
        }
        return ()=>{
            supabase.removeAllSubscriptions();
        }
    },[user])

    async function signIn(userInfo){
        try{
            setOuterLoadingType("white");
            await signInHelper(userInfo);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    async function signInWithEmail(userEmail){
        try{
            await signInWithEmailHelper(userEmail);
        }catch(error){
            setErrorMessage(error.message);
        }
    }
    async function signUp(userValues){
        try{
            setOuterLoadingType("white");
            await signUpHelper(userValues);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();  
        }
    }
    async function updateProfile(authData,data,imageFile){
        try{
            setOuterLoadingType("normal");
            await updateHelper(user.id,authData,data,imageFile);
            setTimeout(() => {
                window.location.reload(false); 
            },100); 
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    const value = {
        signUp,
        signIn,
        signInWithEmail,
        signOut: () => {
            supabase.auth.signOut();
            setImageUrl();
        },
        updateProfile,
        user,imageUrl,setImageUrl,errorMessage,setErrorMessage,
        OuterLoadingType,setOuterLoadingType,
        notification,setNotification
    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;