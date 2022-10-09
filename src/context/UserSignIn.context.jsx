import { useReducer,useContext,createContext } from "react";
import { UserContext } from "./user.context";

const INITIAL_STATE={
    userInfo:{ email:"", password:"" },
    userEmail:"",
};

const UserSignInReducer=function(state=INITIAL_STATE,action){
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

export const UserSignInContext=createContext({});

export default function UserSignInProvider({children}){
    const [ { userInfo, userEmail }, dispatch ]=useReducer(UserSignInReducer,INITIAL_STATE);
    const {signIn,signInWithEmail}=useContext(UserContext);
    function handleEmailChange(evt){
        const inputElem=evt.target;
        dispatch({type:"SET_RESET_EMAIL",payload:inputElem.value});
    }
    function handleInputChange(evt){
        const inputElem=evt.target;
        const newUserInfo={...userInfo,[inputElem.name]:inputElem.value}
        dispatch({type:"SET_USER_INFO",payload:{...newUserInfo}});
    }
    function handleFormSubmission(evt){
        evt.preventDefault();
        signIn(userInfo);
    }
    function handleForm2Submission(evt){
        evt.preventDefault();
        signInWithEmail(userEmail);
    }

    const value={handleInputChange,handleFormSubmission,handleEmailChange,handleForm2Submission};
    return(
        <UserSignInContext.Provider value={value}>{children}</UserSignInContext.Provider>
    )
}