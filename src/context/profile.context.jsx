import { createContext,useContext,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getProfile as getProfileHelper } from "../utils/supabase.utils";
import { UserContext } from "./user.context";

export const ProfileContext=createContext({});

function ProfileProvider({children}){

    const navigate=useNavigate();

    const {setOuterLoadingType}=useContext(UserContext);

    const [profile,setProfile]=useState();

    async function getProfile(userId){
        try{
            setOuterLoadingType("white");
            const data=await getProfileHelper(userId);
            setProfile(data);
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