import { useEffect } from 'react';
import { setUserValues,setUserSkills,resetUserSignUpData } from "../../store/user-signup/user-signup.actions";
import { skills as initialSkillsObject, initialUserValues } from "../../store/user-signup/user-signup.reducer";
import { setErrorMessage, setOuterLoadingType } from "../../store/user/user.actions";
import { selectUserSignUpValues } from "../../store/user-signup/user-signup.selectors";
import { signUp as signUpHelper } from "../../utils/supabase.utils";
import { useSelector,useDispatch } from 'react-redux';
import { FormCont,Container } from './UserSignUpForm.styles';
import { Input, AvatarUpload, CheckBox, Select, TextArea, AuthPagesLogo, Link } from "../";
import Cities from '../../assets/cities.json';

function UserSignUpForm({colorMode}){
    const dispatch=useDispatch();
    const { userValues,skillsObject }=useSelector(selectUserSignUpValues);
    const options=Cities.map((city,index)=><option value={city} key={index}>{city}</option>);

    function handleInputChange(evt){
        const inputElem=evt.target;
        const newUserValues={...userValues,[inputElem.name]:inputElem.value};
        dispatch(setUserValues(newUserValues));
    }

    function handleCitySelection(evt){
        const inputElem=evt.target;
        dispatch(setUserValues({...userValues,city:inputElem.value}));
    }

    function handleSkillsSelection(evt){
        const inputElem=evt.target;
        const newSkillsObject={...skillsObject,[inputElem.value]:inputElem.checked};
        const skills=Object.keys(newSkillsObject).filter(skill=>newSkillsObject[skill]===true);
        const newUserData={userValues:{...userValues,skills},skillsObject:newSkillsObject};
        dispatch(setUserSkills(newUserData));
    }

    function handleAvatarChange(filePath,file){
        dispatch(setUserValues({...userValues,imagePath:filePath,imageFile:file}));
    }

    async function handleFormSubmission(evt){
        evt.preventDefault();
        if(!userValues.imageFile)
            return dispatch(setErrorMessage("Please Choose an Image for your account!"));
        if(!userValues.skills.length)
            return dispatch(setErrorMessage("Please Choose one skill at least!"));
        try{
            dispatch(setOuterLoadingType("white"));
            await signUpHelper(userValues);
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());  
        }
    }

    useEffect(()=>()=>dispatch(resetUserSignUpData({userValues:initialUserValues,skillsObject:initialSkillsObject})),[dispatch]);

    return(
        <Container className={colorMode}>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign Up to our platform</h2>
                <AvatarUpload colorMode={colorMode} onChange={handleAvatarChange}/>
                <Input colorMode={colorMode} name="fName" type="text" label="First Name" placeholder="First Name" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="lName" type="text" label="Last Name" placeholder="Last Name" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="phone" type="tel" label="phone" placeholder="Phone Number" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="website" type="text" label="website" placeholder="Website" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <h2>Select City</h2>
                <Select colorMode={colorMode} label={"City"} value={userValues.city} onChange={handleCitySelection}>{options}</Select>
                <TextArea colorMode={colorMode} name="description" placeholder="Type a breif description about yourself (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <h2>Skills Set</h2>
                <CheckBox colorMode={colorMode} label="Mobile" name="skills" value="Mobile" onChange={handleSkillsSelection}/>
                <CheckBox colorMode={colorMode} label="Hardware" name="skills" value="Hardware" onChange={handleSkillsSelection}/>
                <CheckBox colorMode={colorMode} label="Data" name="skills" value="Data" onChange={handleSkillsSelection}/>
                <CheckBox colorMode={colorMode} label="Design" name="skills" value="Design" onChange={handleSkillsSelection}/>
                <CheckBox colorMode={colorMode} label="Websites" name="skills" value="Websites" onChange={handleSkillsSelection}/>
                <Input colorMode={colorMode} name="submit" type="submit" label="submit" value="submit"/>
                <Link to="/signin">already have an account?</Link>
            </FormCont>
        </Container>
    );
}
export default UserSignUpForm;