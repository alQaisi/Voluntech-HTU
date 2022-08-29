import { createContext,useContext,useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getActivity as getActivityHelper, applyToActivity as applyToActivityHelper } from "../utils/supabase.utils";
import { UserContext } from "./user.context";

export const ActivityContext=createContext({});

function ActivityProvider({children}){
    const navigate=useNavigate();

    const {setOuterLoadingType,user,setErrorMessage}=useContext(UserContext);
    const [activity,setActivity]=useState();
    const {imagePath,type}=user.user_metadata;
    const uid=user.id;

    async function getActivity(actId){
        try{
            setOuterLoadingType("white");
            const data=await getActivityHelper(actId);
            setActivity(data);
        }catch(err){
            navigate("/404");
        }finally{
            setOuterLoadingType();
        }
    }
    async function applyToActivity(data){
        if(data.endDate==="" || data.endDate===undefined)
            return setErrorMessage("Set the end time of your activity");
        try{
            setOuterLoadingType("white");
            await applyToActivityHelper(`${activity.id}${uid}`,activity.cid,uid,activity.id,activity.data.title,data);
            window.location.reload(false);
        }catch(err){
            setErrorMessage("You have already applied for this activity");
        }finally{
            setOuterLoadingType();
        }
    }
    const value={activity,getActivity,type,imagePath,applyToActivity};
    return(
        <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>
    );
}
export default ActivityProvider;