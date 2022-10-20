const INITIAL_STATE={
    menuStatus:false,
    colorMode:"light"
};

export const UiReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "TOGGLE_MENU":
            return { ...state,menuStatus:payload };
        case "TOGGLE_COLOR_MODE":
            return { ...state,colorMode:payload };
        default:
            return state;
    }
}