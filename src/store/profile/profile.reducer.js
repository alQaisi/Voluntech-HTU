const INITIAL_STATE={
    profile:undefined,
    isProfileError:false
};

export const ProfileReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_PROFILE":
            return { ...state,profile:payload };
        case "RESET_PROFILE":
            return INITIAL_STATE;
        case "SET_IS_PROFILE_ERROR":
            return { ...state, isProfileError:payload }
        default:
            return state;
    }
}