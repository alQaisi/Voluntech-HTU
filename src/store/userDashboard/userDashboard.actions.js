import { createAction } from "../../utils/reducer.utils";
import { getUserActivities as getUserActivitiesHelper, deleteUserActivity as deleteUserActivityHelper } from "../../utils/supabase.utils";
import { setOuterLoadingType,setErrorMessage,setMultipleValues } from "../../store/user/user.actions";

export function setWorkExp(payload){
    return createAction("SET_WORK_EXP",payload);
}

export function setUserActivities(payload){
    return createAction("SET_USER_ACTIVITIES",payload);
}

export function deleteUserActivitiesAsync(id,userActivities){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("normal"));
            await deleteUserActivityHelper(id);
            const newUserActivities=userActivities.filter(activity=>activity.id!==id);
            dispatch(setUserActivities(newUserActivities));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            setTimeout(() => {
                dispatch(setMultipleValues({OuterLoadingType:undefined,notification:undefined}));
            },200);
            
        }
    }
}

export function getUserActivitiesAsync(userId){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("normal"));
            const data=await getUserActivitiesHelper(userId);
            dispatch(setUserActivities(data.reverse()));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
}

export function resetUserActivities(){
    return createAction("RESET_USER_ACTIVITIES");
}