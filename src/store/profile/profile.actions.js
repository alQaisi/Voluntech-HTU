import { createAction } from "../../utils/reducer.utils";
import { getProfile as getProfileHelper } from "../../utils/supabase.utils";
import { setOuterLoadingType } from "../../store/user/user.actions";

export function setProfile(payload){
    return createAction("SET_PROFILE",payload);
}

export function setProfileIsError(payload){
    return createAction("SET_IS_PROFILE_ERROR",payload);
}

export function resetProfile(){
    return createAction("RESET_PROFILE");
}

export function getProfileAsync(userId){
    return async function(dispatch){
        try{
            dispatch(setOuterLoadingType("white"));
            const data=await getProfileHelper(userId);
            dispatch(setProfile(data));
        }catch(err){
            dispatch(setProfileIsError(true));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
}