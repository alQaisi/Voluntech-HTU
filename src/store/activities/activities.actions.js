import { createAction } from "../../utils/reducer.utils";
import { getActivites as getActivitesHelper } from "../../utils/supabase.utils";

export function setIsError(payload){
    return createAction("SET_IS_ERROR_ACTIVITIES",payload);
}

export function setActivities(payload){
    return createAction("SET_ACTIVITIES",payload);
}

export function setActivitiesCity(payload){
    return createAction("SET_ACTIVITIES_CITY",payload);
}

export function setActivitiesCategory(payload){
    return createAction("SET_ACTIVITIES_CATEGORY",payload);
}

export function setActivitiesSearchtext(payload){
    return createAction("SET_ACTIVITIES_SEARCH_TEXT",payload);
}

export function resetActivitiesFilter(){
    return createAction("RESET_ACTIVITIES_FILTER");
}

export function resetActivities(){
    return createAction("RESET_ACTIVITIES");
}

export function getActivitesAsync(){
    return async function(dispatch){
        try{
            const data=await getActivitesHelper("company");
            dispatch(setActivities(data.reverse()));
        }catch(err){
            dispatch(setIsError(true));
        }
    }
}