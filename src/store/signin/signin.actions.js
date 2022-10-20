import { createAction } from "../../utils/reducer.utils";

export function setResetEmail(email){
    return createAction("SET_RESET_EMAIL",email);
}

export function setUserInfo(info){
    return createAction("SET_USER_INFO",info);
}
