import { useReducer,useContext,createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile as getProfileHelper } from "../utils/supabase.utils";
import { UserContext } from "./user.context";

const INITIAL_STATE={
    profile:undefined
};

const ProfileReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_PROFILE":
            return { ...state,profile:payload };
        default:
            return state;
    }
}

export const ProfileContext=createContext({});

function ProfileProvider({children}){
    const [ { profile }, dispatch ]=useReducer(ProfileReducer,INITIAL_STATE);
    const navigate=useNavigate();

    const {setOuterLoadingType}=useContext(UserContext);

    async function getProfile(userId){
        try{
            setOuterLoadingType("white");
            const data=await getProfileHelper(userId);
            dispatch({type:"SET_PROFILE",payload:data});
        }catch(err){
            navigate("/404");
        }finally{
            setOuterLoadingType();
        }
    }
    const value={profile,getProfile};
    return(
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    );
}
export default ProfileProvider;