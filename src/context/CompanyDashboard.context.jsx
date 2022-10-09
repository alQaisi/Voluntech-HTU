import { useReducer ,useEffect, useContext, createContext } from "react";
import { UserContext } from "./user.context";
import { addActivity as addActivityHelper, getCompanyActivites as getCompanyActivitesHelper, deleteActivity as deleteActivityHelper, deleteActivityApplicants } from "../utils/supabase.utils";

const INITIAL_STATE={
    activites:[]
}

const CompanyDashboardReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANY_ACTIVITIES":
            return { ...state, activites:payload };
        default:
            return state;
    }
}

export const CompanyDashboardContext=createContext();

function CompanyDashboardProvider({children}){

    const [ { activites }, dispatch ]=useReducer(CompanyDashboardReducer,INITIAL_STATE);

    const { user, setOuterLoadingType, setErrorMessage }=useContext(UserContext);
    
    async function getCompanyActivites(){
        const cid=user.id;
        try{
            setOuterLoadingType("normal");
            const data=await getCompanyActivitesHelper(cid);
            if(data)
                dispatch({type:"SET_COMPANY_ACTIVITIES",payload:data.reverse()});
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
            const newActivities=[...activity,...activites]
            dispatch({type:"SET_COMPANY_ACTIVITIES",payload:newActivities}); 
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
            await deleteActivityHelper(id);
            //eslint-disable-next-line
            const newActivities=activites.filter(activity=>activity.id!=id);
            dispatch({type:"SET_COMPANY_ACTIVITIES",payload:newActivities});
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