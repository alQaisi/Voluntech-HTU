const INITIAL_STATE={
    workExp:undefined,
    activities:undefined
}

export const UserDashboardReducer=function(state=INITIAL_STATE,action){
    const { type,payload }=action;
    switch(type){
        case "SET_WORK_EXP":
            return { ...state,workExp:payload };
        case "SET_USER_ACTIVITIES":
            return { ...state,activities:payload };
        case "RESET_USER_ACTIVITIES":
            return INITIAL_STATE;
        case "RESET_USER_WORK":
            return { ...state,workExp:undefined }
        default:
            return state;
    }
}