import { useReducer,useContext,createContext } from "react";
import { UserContext } from "./user.context";
import Cities from '../assets/cities.json';

const skills={
    "Mobile":false,
    "Hardware":false,
    "Data":false,
    "Design":false,
    "Websites":false,
};

const initialUserValues={
    fName:"",lName:"",password:"",email:"",phone:"",website:"",
    city:Cities[0],description:"",skills:[],imagePath:null,imageFile:null,type:"user"
};

const INITIAL_STATE={
    skillsObject:skills,
    userValues:initialUserValues,
};

const UserSignUpReducer=function(state=INITIAL_STATE,action){
    const { type,payload }=action;
    switch(type){
        case "SET_USER_VALUES":
            return { ...state,userValues:payload };
        case "SET_USER_SKILLS":
            return { ...state,...payload };
        default:
            return state;
    }
};

export const UserSignUpContext=createContext({});

export function UserSignUpContextProvider({children}){
    const [ { skillsObject,userValues }, dispatch ]=useReducer(UserSignUpReducer,INITIAL_STATE);
    const {signUp,setErrorMessage}=useContext(UserContext);
    function handleInputChange(evt){
        const inputElem=evt.target;
        const newUserValues={...userValues,[inputElem.name]:inputElem.value};
        dispatch({type:"SET_USER_VALUES",payload:newUserValues});
    }
    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...skillsObject,[inputElem.value]:inputElem.checked};
        const skills=Object.keys(newSkillsObject).filter(skill=>newSkillsObject[skill]===true);
        const newUserData={userValues:{...userValues,skills},skillsObject:newSkillsObject};
        dispatch({type:"SET_USER_SKILLS",payload:newUserData});
    }
    function handleCitySelection(evt){
        const inputElem=evt.target;
        dispatch({type:"SET_USER_VALUES",payload:{...userValues,city:inputElem.value}});
    }
    function handleAvatarChange(filePath,file){
        dispatch({type:"SET_USER_VALUES",payload:{...userValues,imagePath:filePath,imageFile:file}});
    }
    function handleFormSubmission(evt){
        evt.preventDefault();
        if(!userValues.imageFile)
            return setErrorMessage("Please Choose an Image for your account!");
        if(!userValues.skills.length)
            return setErrorMessage("Please Choose one skill at least!");
        signUp(userValues)
    }
    const value={userValues,handleFormSubmission,handleInputChange,handleSkillsSelection,handleCitySelection,handleAvatarChange};

    return(
        <UserSignUpContext.Provider value={value}>{children}</UserSignUpContext.Provider>
    );
}