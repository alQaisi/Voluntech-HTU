import { createAction } from "../../utils/reducer.utils";
import { getActivity as getActivityHelper} from "../../utils/supabase.utils";
import { setOuterLoadingType } from "../../store/user/user.actions.js";

export function setCurrentActivity(payload){
    return createAction("SET_ACTIVITY",payload);
}

export function resetCurrentActivity(){
    return createAction("RESET_ACTIVITY");
}

export function setActivityIsError(payload){
    return createAction("SET_IS_ACTIVITY_ERROR",payload);
}

export function getActivityAsync(actId){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("white"));
            const data=await getActivityHelper(actId);
            dispatch(setCurrentActivity(data));
        }catch(err){
            dispatch(setActivityIsError(true));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
}
