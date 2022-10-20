const INITIAL_STATE={
    userInfo:{ email:"", password:"" },
    userEmail:"",
};

export const UserSignInReducer=function(state=INITIAL_STATE,action){
    const { type, payload } =action;
    switch(type){
        case "SET_USER_INFO":
            return { ...state, userInfo:payload, userEmail:"" };
        case "SET_RESET_EMAIL":
            return { ...state, userEmail:payload, userInfo:{ email:"", password:"" } };
        default:
            return state;
    }
}