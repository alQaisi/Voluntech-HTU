import { createAction } from "../../utils/reducer.utils";

export function setUserValues(userValues){
    return createAction("SET_USER_SIGNUP_VALUES",userValues);
}

export function setUserSkills(userData){
    return createAction("SET_USER_SIGNUP_SKILLS",userData);
}

export function resetUserSignUpData(userData){
    return createAction("RESET_USER_SIGNUP_DATA",userData);
}