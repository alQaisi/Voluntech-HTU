import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setErrorMessage, setOuterLoadingType } from '../../store/user/user.actions';
import { setCompanyData, resetCompanyData } from "../../store/company-signup/company-signup.actions";
import { selectCompanyValues } from '../../store/company-signup/company-signup.selectors';
import { initialCompanyValues } from '../../store/company-signup/company-signup.reducer';
import { FormCont,Container } from '../UserSignUpForm/UserSignUpForm.styles';
import { Input, AvatarUpload, TextArea, Select, AuthPagesLogo, Link } from "../";
import { signUp } from "../../utils/supabase.utils";

function CompanySignUpForm({colorMode}){
    const dispatch=useDispatch();
    const companyValues=useSelector(selectCompanyValues);
    
    function handleInputChange(evt){
        const inputElem=evt.target;
        dispatch(setCompanyData({[inputElem.name]:inputElem.value}));
    }
    function handleTypeSelection(evt){
        const inputElem=evt.target;
        dispatch(setCompanyData({cType:inputElem.value}));
    }
    function handleAvatarChange(filePath,file){
        dispatch(setCompanyData({imagePath:filePath,imageFile:file}));
    }

    async function handleFormSubmission(evt){
        evt.preventDefault();
        if(!companyValues.imageFile)
            return dispatch(setErrorMessage("Please Choose an Image for your account."));
        try{
            dispatch(setOuterLoadingType("white"));
            await signUp(companyValues);
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());  
        }
    }
    
    useEffect(()=>()=>dispatch(resetCompanyData(initialCompanyValues)),[dispatch]);

    return(
        <Container className={colorMode}>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign Up to our platform</h2>
                <AvatarUpload colorMode={colorMode} onChange={handleAvatarChange}/>
                <Input colorMode={colorMode} name="cName" type="text" label="Company Name" placeholder="Company Name" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="phone" type="tel" label="phone" placeholder="Phone Number" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="website" type="text" label="website" placeholder="Website" required onChange={handleInputChange} />
                <Input colorMode={colorMode} name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <TextArea colorMode={colorMode} name="description" placeholder="Type a breif description about your company (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <h2>Select Type</h2>
                <Select colorMode={colorMode} label={"Company type"} value={companyValues.cType} onChange={handleTypeSelection}>
                    <option value="NGO">NGO</option>
                    <option value="Government">Government</option>
                    <option value="Religious">Religious</option>
                </Select>
                <Input colorMode={colorMode} name="submit" type="submit" label="submit" value="submit"/>
                <Link to="/signin">already have an account?</Link>
            </FormCont>
        </Container>
    );
}
export default CompanySignUpForm;