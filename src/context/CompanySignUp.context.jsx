import { createContext,useState,useContext } from "react";
import { UserContext } from "./user.context";

export const CompanySignUpContext=createContext({});

export function CompanySignUpContextProvider({children}){
    
    const {signUp,setErrorMessage}=useContext(UserContext);

    const initialCompanyValues={
        cName:"",password:"",email:"",phone:"",website:"",
        description:"",cType:"NGO",imageFile:null,imagePath:null,type:"company"
    };
    const [companyValues,setCompanyValues]=useState(initialCompanyValues);

    function handleInputChange(evt){
        const inputElem=evt.target;
        const newCompanyValues={...companyValues,[inputElem.name]:inputElem.value};
        setCompanyValues(newCompanyValues);
    }
    function handleTypeSelection(evt){
        const inputElem=evt.target;
        setCompanyValues({...companyValues,cType:inputElem.value});
    }
    function handleAvatarChange(filePath,file){
        setCompanyValues({...companyValues,imagePath:filePath,imageFile:file});
    }
    function handleFormSubmission(evt){
        evt.preventDefault();
        if(!companyValues.imageFile)
            return setErrorMessage("Please Choose an Image for your account.");
        signUp(companyValues);
    }
    const value={companyValues,handleFormSubmission,handleInputChange,handleTypeSelection,handleAvatarChange};

    return(
        <CompanySignUpContext.Provider value={value}>{children}</CompanySignUpContext.Provider>
    );
}