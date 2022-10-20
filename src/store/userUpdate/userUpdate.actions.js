import { createAction } from "../../utils/reducer.utils";

export function setInitialUpdateValues(payload){
    return createAction("SET_INITIAL_UPDATE_VALUES",payload);
}

export function setUpdateData(payload){
    return createAction("SET_UPDATE_DATA",payload);
}

export function setMultipleUpdateValues(payload){
    return createAction("SET_MULTIPLE_UPDATE_VALUES",payload);
}

export function setAuthData(payload){
    return createAction("SET_AUTH_DATA",payload);
}

export function resetUpdateValue(){
    return createAction("RESET_UPDATE_VALUE");
}