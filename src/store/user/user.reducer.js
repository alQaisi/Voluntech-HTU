const INITIAL_STATE={
    OuterLoadingType:undefined,
    user:undefined,
    imageUrl:undefined,
    errorMessage:undefined,
    notification:undefined,
};

export const userReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_USER_DATA":
            return { ...state, ...payload };
        case "SET_REG_IMAGE_URL":
            return { ...state, imageUrl:payload }
        case "NOTIFICATION":
            return { ...state, notification:payload };
        case "SET_LOADING_TYPE":
            return { ...state, OuterLoadingType:payload };
        case "SET_ERROR_MESSAGE":
            return { ...state, errorMessage:payload }
        case "SET_MULTIPLE_STATE_VALUES":
            return { ...state, ...payload };
        default:
            return state;
    }
};