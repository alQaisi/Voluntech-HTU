import { useState,useEffect,createContext } from "react";
import {supabase,signUp as signUpHelper,signIn as signInHelper,signInWithEmail as signInWithEmailHelper,update as updateHelper } from '../utils/supabase.utils';

export const UserContext=createContext({});

function UserProvider({children}){

    const [OuterLoadingType,setOuterLoadingType]=useState();
    const [user,setUser]=useState();
    const [imageUrl,setImageUrl]=useState();
    const [errorMessage,setErrorMessage]=useState();
    
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
        OuterLoadingType,setOuterLoadingType
    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;