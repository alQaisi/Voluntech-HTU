import { createAction } from "../../utils/reducer.utils";
import { setOuterLoadingType,setErrorMessage,setMultipleValues } from "../../store/user/user.actions";
import { getCompanyActivites as getCompanyActivitesHelper, addActivity as addActivityHelper, deleteActivity as deleteActivityHelper, deleteActivityApplicants } from "../../utils/supabase.utils";

export function setCompanyActivities(payload){
    return createAction("SET_COMPANY_ACTIVITIES",payload);
}

export function resetCompanyActivities(){
    return createAction("RESET_COMPANY_DASHBOARD");
}

export function addNewActivityAsync(cid,cName,logo,data,activities){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("normal"));
            const activity=await addActivityHelper(cid,cName,logo,data);
            const newActivities=[...activity,...activities]
            dispatch(setCompanyActivities(newActivities));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
}

export function deleteActivityAsync(id,activities){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("normal"));
            await deleteActivityApplicants(id);
            await deleteActivityHelper(id);
            //eslint-disable-next-line
            const newActivities=activities.filter(activity=>activity.id!=id);            
            dispatch(setCompanyActivities(newActivities));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setMultipleValues({OuterLoadingType:undefined,notification:undefined}));
        }
    }
}

export function updateActivitiesLogo(logo,activities){
    return function(dispatch){
        const companyActivities=activities.map(activity=>({
            ...activity,logo
        }));
        dispatch(setCompanyActivities(companyActivities));
    }
}

export function getCompanyActivitesAsync(cid){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("normal"));
            const data=await getCompanyActivitesHelper(cid);
            dispatch(setCompanyActivities(data?.reverse()));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
}