import { createContext,useContext,useState } from "react";
import { UserContext } from "./user.context";

export const UserUpdateContext=createContext();

function UserUpdateProvider({children}){
    const [imageFile,setImageFile]=useState();
    const {setErrorMessage,user,updateProfile}=useContext(UserContext);
    const [authData,setAuthData]=useState({
        email:user.email,
        password:user.user_metadata.password,
    });
    const [data,setData]=useState({
        description:user.user_metadata.description,
        imagePath:user.user_metadata.imagePath,
        phone:user.user_metadata.phone,
        ...(user.user_metadata.type==="user" && {workExp:user.user_metadata?.workExp || []}),
        ...(user.user_metadata.type==="user" && {skills:getSkillsObject(user.user_metadata?.skills)}),
        website:user.user_metadata.website,
    });
    const [defaultImage,setDefaultImage]=useState(`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${data.imagePath}`)
    function getSkillsObject(skills){
        const checkedSkills={Mobile:false,Hardware:false,Data:false,Design:false,Websites:false};
        skills.forEach(skill =>checkedSkills[skill]=true);
        return checkedSkills;
    }
    function handleInputChange(evt){
        const inputElem=evt.target;
        if(inputElem.name==="email" || inputElem.name==="password")
            return setAuthData({...authData,[inputElem.name]:inputElem.value});
        setData({...data,[inputElem.name]:inputElem.value});
    }
    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...data.skills,[inputElem.value]:inputElem.checked};
        setData({...data,skills:newSkillsObject});
    }
    function handleAvatarChange(filePath,file){
        setDefaultImage();
        setImageFile(file);
        setData({...data,imagePath:filePath});
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
        updateProfile(authData,newData);
    }
    const value={defaultImage,authData,data,updateWorkExperience,handleInputChange,handleSkillsSelection,handleAvatarChange,handleFormSubmission};
    return(
        <UserUpdateContext.Provider value={value}>{children}</UserUpdateContext.Provider>
    );
}
export default UserUpdateProvider;