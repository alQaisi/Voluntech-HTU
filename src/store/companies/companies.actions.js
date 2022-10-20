import { createAction } from "../../utils/reducer.utils";
import { getProfiles } from "../../utils/supabase.utils";

export function setCompanies(payload){
    return createAction("SET_COMPANIES",payload);
}

export function resetCompanies(){
    return createAction("RESET_COMPANIES");
}

export function setIsErrorCompanies(payload){
    return createAction("SET_IS_ERROR_COMPANIES",payload);
}

export function setCompaniesType(payload){
    return createAction("SET_COMPANIES_TYPE",payload);
}

export function setCompaniesSearchtext(payload){
    return createAction("SET_COMPANIES_SEARCH_TEXT",payload);
}

export function getCompaniesAsync(){
    return async function(dispatch){
        try{
            const data=await getProfiles("company");
            dispatch(setCompanies(data.reverse()));
        }catch(err){
            dispatch(setIsErrorCompanies(true));
        }
    }
}