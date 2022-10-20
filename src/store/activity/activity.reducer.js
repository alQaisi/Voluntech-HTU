const INITIAL_STATA={
    activity:undefined,
    isActivityError:false
}

export const ActivityReducer=function(state=INITIAL_STATA,action){
    const { type,payload }=action;
    switch(type){
        case "SET_ACTIVITY":
            return { ...state,activity:payload };
        case "RESET_ACTIVITY":
            return INITIAL_STATA;
        case "SET_IS_ACTIVITY_ERROR":
            return { ...state,isActivityError:payload }
        default:
            return state;
    }
} 