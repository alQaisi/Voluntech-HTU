import { useReducer, useEffect, useContext, createContext } from "react";
import { UserContext } from "./user.context";

const INITIAL_STATE={
    imageFile:undefined,
    authData:undefined,
    data:{},
    defaultImage:undefined,
}

const UserUpdateReducer=function(state=INITIAL_STATE,action){
    let { type, payload }=action;
    switch(type){
        case "SET_INITIAL_VALUES":
        case "SET_MULTIPLE_VALUES":
            return { ...state, ...payload };
        case "SET_DATA":
            return { ...state, data:payload };
        case "SET_AUTH_DATA":
            return { ...state, authData:payload }
        case "SET_NEW_IMAGE":
            return { ...state, defaultImage:undefined, ...payload };
        default:
            return state;
    }
}

export const UserUpdateContext=createContext();

function UserUpdateProvider({children}){

    const [ { imageFile, authData, data, defaultImage }, dispatch ]=useReducer(UserUpdateReducer,INITIAL_STATE);
    const {setErrorMessage,user,updateProfile}=useContext(UserContext);

    useEffect(()=>{
        const authData={
            email:user.email,
            password:user.user_metadata.password,
        };
        const data={
            description:user.user_metadata.description,
            imagePath:user.user_metadata.imagePath,
            phone:user.user_metadata.phone,
            ...(user.user_metadata.type==="user" && {workExp:user.user_metadata?.workExp || []}),
            ...(user.user_metadata.type==="user" && {skills:getSkillsObject(user.user_metadata?.skills)}),
            website:user.user_metadata.website,
        };
        const imageUrl=imageFile && URL.createObjectURL(imageFile);
        const userData={
            authData,
            data,
            imageFile:undefined,
            defaultImage:imageUrl || `https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${data.imagePath}`,
        }
        dispatch({type:"SET_INITIAL_VALUES",payload:userData})
        //eslint-disable-next-line
    },[user]);
    
    function getSkillsObject(skills){
        const checkedSkills={Mobile:false,Hardware:false,Data:false,Design:false,Websites:false};
        skills.forEach(skill =>checkedSkills[skill]=true);
        return checkedSkills;
    }

    function handleInputChange(evt){
        const inputElem=evt.target;
        if(inputElem.name==="email" || inputElem.name==="password")
            return dispatch({type:"SET_AUTH_DATA",payload:{...authData,[inputElem.name]:inputElem.value}});
            dispatch({type:"SET_DATA",payload:{...data,[inputElem.name]:inputElem.value}});
    }
    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...data.skills,[inputElem.value]:inputElem.checked};
        dispatch({type:"SET_DATA",payload:{...data,skills:newSkillsObject}});
    }
    function handleAvatarChange(filePath,file){
        const newData={data:{...data,imagePath:filePath},defaultImage:undefined,imageFile:file};
        dispatch({type:"SET_MULTIPLE_VALUES",payload:newData})
    }
    function handleFormSubmission(evt){
        evt.preventDefault();
        let skillsObject,check,skillsArray=[];
        if(data.skills){
            skillsObject=Object.values(data?.skills)
            check=skillsObject.reduce((acc,skill)=>acc || skill);
            skillsArray=Object.keys(data?.skills).filter(skill=>data.skills[skill]);
        }
        if(!check && user.user_metadata.type==="user")
            return setErrorMessage("Please Choose one skill at least.");
        
        const newData={...user.user_metadata,...{
            imagePath:data.imagePath,
            ...(data.phone!=="" && {phone:data.phone}),
            ...(data.description!=="" && {description:data.description}),
            ...(data.website!=="" && {website:data.website}),
            ...(user.user_metadata.type==="user" && {skills:skillsArray}),
        }}
        const newAuthData={
            ...(authData.email!=="" && {email:authData.email}),
            ...(authData.password!=="" && {password:authData.password})
        }
        updateProfile(newAuthData,newData,imageFile);
    }
    function updateWorkExperience(workExpObject){
        const newData={...user.user_metadata,...{workExp:workExpObject}}
        dispatch({type:"SET_DATA",payload:newData})
        updateProfile(authData,newData);
    }
    const value={defaultImage,authData,data,updateWorkExperience,handleInputChange,handleSkillsSelection,handleAvatarChange,handleFormSubmission};
    return(
        <UserUpdateContext.Provider value={value}>{children}</UserUpdateContext.Provider>
    );
}
export default UserUpdateProvider;