import { createAction } from "../../utils/reducer.utils";
import { supabase } from '../../utils/supabase.utils';

export function setOuterLoadingType(type){
    return createAction("SET_LOADING_TYPE",type);
}

export function setErrorMessage(type){
    return createAction("SET_ERROR_MESSAGE",type);
}

export function setNotification(type){
    return createAction("NOTIFICATION",type);
}

export function setUser(user,imageUrl){
    if(imageUrl==="CLEAR_IMAGE")
        return createAction("SET_USER_DATA",{user,imageUrl:undefined});
    return createAction("SET_USER_DATA",{ user });
}

export function setImageUrl(imageUrl){
    return createAction("SET_REG_IMAGE_URL",imageUrl);
}

export function setMultipleValues(payload){
    return createAction("SET_MULTIPLE_STATE_VALUES",payload);
}

export async function signOut(){
    supabase.auth.signOut();
}