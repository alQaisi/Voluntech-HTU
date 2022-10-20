import { createAction } from "../../utils/reducer.utils";

export function setCompanyData(payload){
    return createAction("SET_COMPANY_VALUES",payload);
}

export function resetCompanyData(payload){
    return createAction("RESET_COMPANY_VALUES",payload);
}