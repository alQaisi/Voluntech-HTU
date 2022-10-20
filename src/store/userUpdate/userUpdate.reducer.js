const INITIAL_STATE={
    imageFile:undefined,
    authData:undefined,
    data:{},
    defaultImage:undefined,
}

export const UserUpdateReducer=function(state=INITIAL_STATE,action){
    let { type, payload }=action;
    switch(type){
        case "SET_INITIAL_UPDATE_VALUES":
        case "SET_MULTIPLE_UPDATE_VALUES":
            return { ...state, ...payload };
        case "SET_UPDATE_DATA":
            return { ...state, data:payload };
        case "SET_AUTH_DATA":
            return { ...state, authData:payload }
        case "SET_NEW_IMAGE":
            return { ...state, defaultImage:undefined, ...payload };
        case "RESET_UPDATE_VALUE":
            return { imageFile:undefined,authData:undefined,data:{},defaultImage:undefined }
        default:
            return state;
    }
}