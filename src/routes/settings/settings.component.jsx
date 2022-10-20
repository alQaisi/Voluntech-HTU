import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setErrorMessage,setOuterLoadingType,setUser } from "../../store/user/user.actions.js";
import { selectUser } from "../../store/user/user.selector.js";
import { selectUpdateValues } from "../../store/userUpdate/userUpdate.selectors"
import { setInitialUpdateValues, setUpdateData, setMultipleUpdateValues, setAuthData, resetUpdateValue } from "../../store/userUpdate/userUpdate.actions";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { Container } from "./settings.styles"
import { AvatarUpload, Input, CheckBox, TextArea } from "../../components";
import { update as updateHelper, updateActivitiesLogo } from "../../utils/supabase.utils";
import { selectColorMode } from "../../store/ui/ui.selectors";

function Settings(){
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const {data,authData,defaultImage,imageFile}=useSelector(selectUpdateValues);
    const colorMode=useSelector(selectColorMode);

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
        dispatch(setInitialUpdateValues(userData));
        return(()=>dispatch(resetUpdateValue()));
        //eslint-disable-next-line
    },[user]);

    function handleInputChange(evt){
        const inputElem=evt.target;
        if(inputElem.name==="email" || inputElem.name==="password")
            return dispatch(setAuthData({...authData,[inputElem.name]:inputElem.value}));
            dispatch(setUpdateData({...data,[inputElem.name]:inputElem.value}));
    }

    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...data.skills,[inputElem.value]:inputElem.checked};
        dispatch(setUpdateData({...data,skills:newSkillsObject}));
    }

    function handleAvatarChange(filePath,file){
        const newData={data:{...data,imagePath:filePath},defaultImage:undefined,imageFile:file};
        dispatch(setMultipleUpdateValues(newData));
    }

    function getSkillsObject(skills){
        const checkedSkills={Mobile:false,Hardware:false,Data:false,Design:false,Websites:false};
        skills.forEach(skill =>checkedSkills[skill]=true);
        return checkedSkills;
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

    async function updateProfile(authData,data,imageFile){
        try{
            const oldImagePath=user.user_metadata.imagePath;
            const { imagePath, type }=data;
            dispatch(setOuterLoadingType("normal"));
            const { user:newUserData }=await updateHelper(user.id,authData,data,imageFile);
            if( oldImagePath!==imagePath && type==="company")
                await updateActivitiesLogo(user.id,imagePath);
            const imageUrl=imageFile && URL.createObjectURL(imageFile);
            dispatch(setUser(newUserData,imageUrl));
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }

    const skillsSet=data?.skills && Object.keys(data?.skills).map((skill,index)=>(
        <CheckBox colorMode={colorMode} key={index} label={skill} name={skill} value={skill} checked={data.skills[skill]} onChange={handleSkillsSelection}/>
    ));
    const wlecomeMessage=user.user_metadata.type==="user"?`Hi ${user.user_metadata.fName}`:`Hi ${user.user_metadata.cName} Organization`;
    useDocumentTitle("Settings");
    return(
        <Container className={colorMode}>
            <form onSubmit={handleFormSubmission}>
            <h1>{wlecomeMessage}</h1>
            <p>Use this page to update some of your basic info</p>
            <p>Mind that not all of your info are editable, you need to contact with us if you want to change your name,residence and company type</p>
            <AvatarUpload colorMode={colorMode} onChange={handleAvatarChange} bigSize={true} defaultImage={defaultImage}/>
            <Input colorMode={colorMode} type="email" name="email" label="email" placeholder={user.email} onChange={handleInputChange}/>
            <Input colorMode={colorMode} name="phone" type="phone" label="phone" placeholder={user.user_metadata.phone}  onChange={handleInputChange} />
            <Input colorMode={colorMode} name="website" type="text" label="website" placeholder={data.website}  onChange={handleInputChange} />
            <Input colorMode={colorMode} name="password" type="password" label="password" placeholder="new password"  onChange={handleInputChange} />
            <TextArea colorMode={colorMode} name="description" placeholder={user.user_metadata.description} label="description" maxLength="350" onChange={handleInputChange}/>
            {
                skillsSet?
                <>
                <h2>Skills Set</h2>
                {skillsSet}
                </>
                :<></>
            }
            <Input colorMode={colorMode} name="submit" type="submit" label="submit" value="update"/>
            </form>
        </Container>
    );
}
export default Settings;