import { createAction } from "../../utils/reducer.utils";
import { getProfiles } from "../../utils/supabase.utils";

export function setTechnologists(payload){
    return createAction("SET_TECHNOLOGISTS",payload);
}

export function resetTechnologists(){
    return createAction("RESET_TECHNOLOGISTS");
}

export function setIsErrorTechnologists(payload){
    return createAction("SET_IS_ERROR_TECHNOLOGISTS",payload);
}

export function setTechnologistsCity(payload){
    return createAction("SET_TECHNOLOGISIT_CITY",payload);
}

export function setTechnologistsSkills(payload){
    return createAction("SET_SKILLS_FILTER",payload);
}

export function getTechnologistsAsync(){
    return async function(dispatch){
        try{
            const data=await getProfiles("user");
            dispatch(setTechnologists(data.reverse()));
        }catch(err){
            dispatch(setIsErrorTechnologists(true));
        }
    }
}