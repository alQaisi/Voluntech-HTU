import { useReducer,useContext,createContext } from "react";
import { UserContext } from "./user.context";

const initialCompanyValues={
    cName:"",password:"",email:"",phone:"",website:"",
    description:"",cType:"NGO",imageFile:null,imagePath:null,type:"company"
};

const INITIAL_STATE={
    companyValues:initialCompanyValues
};

const CompanySignUpReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "SET_COMPANY_VALUES":
            return {...state,companyValues:{...payload}}
        default:
            return state;
    } 
}

export const CompanySignUpContext=createContext({});

export function CompanySignUpContextProvider({children}){
    
    const {signUp,setErrorMessage}=useContext(UserContext);
    const [ { companyValues }, dispatch ]=useReducer(CompanySignUpReducer,INITIAL_STATE);

    function handleInputChange(evt){
        const inputElem=evt.target;
        dispatch({type:"SET_COMPANY_VALUES",payload:{[inputElem.name]:inputElem.value}});
    }
    function handleTypeSelection(evt){
        const inputElem=evt.target;
        dispatch({type:"SET_COMPANY_VALUES",payload:{cType:inputElem.value}});
    }
    function handleAvatarChange(filePath,file){
        dispatch({type:"SET_COMPANY_VALUES",payload:{imagePath:filePath,imageFile:file}});
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