import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./user.context";
import { addActivity as addActivityHelper, getCompanyActivites as getCompanyActivitesHelper, deleteActivity as deleteActivityHelper, deleteActivityApplicants } from "../utils/supabase.utils";

export const CompanyDashboardContext=createContext();

function CompanyDashboardProvider({children}){
    const { user, setOuterLoadingType, setErrorMessage }=useContext(UserContext);
    const [activites,setActivites]=useState([]);
    
    async function getCompanyActivites(){
        const cid=user.id;
        try{
            setOuterLoadingType("normal");
            const data=await getCompanyActivitesHelper(cid);
            if(data)
                setActivites(data.reverse());
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    useEffect(()=>{
        getCompanyActivites();
        //eslint-disable-next-line
    },[])

    async function addActivity(data){
        const cid=user.id;
        const logo=user.user_metadata.imagePath;
        const cName=user.user_metadata.cName;
        if(data.skill==="" || data.skill==="Select Category")
            return setErrorMessage("Choose the category of your activity");
        if(data.city==="" || data.city==="Select City")
            return setErrorMessage("Choose the city for your activity");
        if(data.endDate==="" || data.endDate===undefined)
            return setErrorMessage("Set the end time of your activity");
        try{
            setOuterLoadingType("normal");
            const activity=await addActivityHelper(cid,cName,logo,data);
            if(activity)
                window.location.reload(false); 
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    async function deleteActivity(id){
        try{
            setOuterLoadingType("normal");
            await deleteActivityApplicants(id);
            const data=await deleteActivityHelper(id);
            if(data)
                window.location.reload(false); 
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    const value={ addActivity,deleteActivity,activites };
    return(
        <CompanyDashboardContext.Provider value={value}>{children}</CompanyDashboardContext.Provider>
    );
}
export default CompanyDashboardProvider;