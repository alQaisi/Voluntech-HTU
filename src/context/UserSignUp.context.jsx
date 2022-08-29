import { createContext,useState,useContext } from "react";
import { UserContext } from "./user.context";
import Cities from '../assets/cities.json';

export const UserSignUpContext=createContext({});

export function UserSignUpContextProvider({children}){

    const {signUp,setErrorMessage}=useContext(UserContext);
    
    const [skillsObject,setSkills]=useState({
        "Mobile":false,
        "Hardware":false,
        "Data":false,
        "Design":false,
        "Websites":false,
    });

    const initialUserValues={
        fName:"",lName:"",password:"",email:"",phone:"",website:"",
        city:Cities[0],description:"",skills:[],imagePath:null,imageFile:null,type:"user"
    };
    const [userValues,setUserValues]=useState(initialUserValues);

    function handleInputChange(evt){
        const inputElem=evt.target;
        const newUserValues={...userValues,[inputElem.name]:inputElem.value};
        setUserValues(newUserValues);
    }
    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...skillsObject,[inputElem.value]:inputElem.checked};
        setSkills(newSkillsObject);
        const skills=Object.keys(newSkillsObject).filter(skill=>newSkillsObject[skill]===true);
        setUserValues({...userValues,skills});
    }
    function handleCitySelection(evt){
        const inputElem=evt.target;
        setUserValues({...userValues,city:inputElem.value});
    }
    function handleAvatarChange(filePath,file){
        setUserValues({...userValues,imagePath:filePath,imageFile:file});
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