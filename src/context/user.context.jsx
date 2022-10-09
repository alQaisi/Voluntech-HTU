import { useEffect, useReducer, createContext } from "react";
import {supabase,signUp as signUpHelper,signIn as signInHelper,signInWithEmail as signInWithEmailHelper,update as updateHelper, updateActivitiesLogo } from '../utils/supabase.utils';

export const UserContext=createContext({});

const INITIAL_STATE={
    OuterLoadingType:undefined,
    user:undefined,
    imageUrl:undefined,
    errorMessage:undefined,
    notification:undefined,
}

const UserReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_USER_DATA":
            return { ...state, ...payload };
        case "SET_REG_IMAGE_URL":
            return { ...state, imageUrl:payload }
        case "NOTIFICATION":
            return { ...state, notification:payload };
        case "SET_LOADING_TYPE":
            return { ...state, OuterLoadingType:payload };
        case "SET_ERROR_MESSAGE":
            return { ...state, errorMessage:payload }
        default:
            return state;
    }
}

function UserProvider({children}){

    const [ { OuterLoadingType, user, imageUrl, errorMessage, notification }, dispatch]=useReducer(UserReducer,INITIAL_STATE)

    function setOuterLoadingType(type){
        dispatch({type:"SET_LOADING_TYPE",payload:type});
    }

    function setErrorMessage(type){
        dispatch({type:"SET_ERROR_MESSAGE",payload:type});
    }

    function setNotification(type){
        dispatch({type:"NOTIFICATION",payload:type});
    }

    function setUser(user,imageUrl){
        dispatch({type:"SET_USER_DATA",payload:{user,...(imageUrl && {imageUrl})}});
    }
    
    function setImageUrl(imageUrl){
        dispatch({type:"SET_REG_IMAGE_URL",payload:imageUrl});
    }

    useEffect(()=>{
        const session = supabase.auth.session();
        setUser(session?.user ?? null);
        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
                if(!session?.user)
                    dispatch({type:"SET_REG_IMAGE_URL",payload:undefined});
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
    },[user]);

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
            setImageUrl();
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
            const oldImagePath=user.user_metadata.imagePath;
            const { imagePath, type }=data;
            setOuterLoadingType("normal");
            const { user:newUserData }=await updateHelper(user.id,authData,data,imageFile);
            if( oldImagePath!==imagePath && type==="company")
                await updateActivitiesLogo(user.id,imagePath);
            const imageUrl=imageFile && URL.createObjectURL(imageFile);
            setUser(newUserData,imageUrl);
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
        },
        updateProfile,
        user,setImageUrl,imageUrl,errorMessage,setErrorMessage,
        OuterLoadingType,setOuterLoadingType,
        notification,setNotification
    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;