import { createContext,useContext,useState,useEffect } from "react";
import { UserContext } from "./user.context";


export const UserSignInContext=createContext({});

export default function UserSignInProvider({children}){
    const {signIn,signInWithEmail,setImageUrl}=useContext(UserContext);
    const [userInfo,setUserInfo]=useState({email:"",password:""});
    const [userEmail,setUserEmail]=useState();
    function handleEmailChange(evt){
        const inputElem=evt.target;
        setUserEmail(inputElem.value);
    }
    function handleInputChange(evt){
        const inputElem=evt.target;
        setUserInfo({...userInfo,[inputElem.name]:inputElem.value});
    }
    function handleFormSubmission(evt){
        evt.preventDefault();
        signIn(userInfo);
    }
    function handleForm2Submission(evt){
        evt.preventDefault();
        signInWithEmail(userEmail);
    }
    useEffect(()=>(
        setImageUrl(null)
        //eslint-disable-next-line
    ),[]);
    const value={handleInputChange,handleFormSubmission,setUserEmail,handleEmailChange,handleForm2Submission};
    return(
        <UserSignInContext.Provider value={value}>{children}</UserSignInContext.Provider>
    )
}