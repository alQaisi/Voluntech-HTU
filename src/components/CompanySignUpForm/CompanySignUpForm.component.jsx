import { useContext } from 'react';
import { CompanySignUpContext } from '../../context/CompanySignUp.context';
import { FormCont,Container } from '../UserSignUpForm/UserSignUpForm.styles';
import { Input, AvatarUpload, TextArea, Select, AuthPagesLogo, Link } from "../";

function CompanySignUpForm(){
    const {companyValues,handleFormSubmission,handleTypeSelection,handleInputChange,handleAvatarChange}=useContext(CompanySignUpContext)
    return(
        <Container>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign Up to our platform</h2>
                <AvatarUpload onChange={handleAvatarChange}/>
                <Input name="cName" type="text" label="Company Name" placeholder="Company Name" required onChange={handleInputChange} />
                <Input name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input name="phone" type="tel" label="phone" placeholder="Phone Number" required onChange={handleInputChange} />
                <Input name="website" type="text" label="website" placeholder="Website" required onChange={handleInputChange} />
                <Input name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <TextArea name="description" placeholder="Type a breif description about your company (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <h2>Select Type</h2>
                <Select label={"Company type"} value={companyValues.cType} onChange={handleTypeSelection}>
                    <option value="NGO">NGO</option>
                    <option value="Government">Government</option>
                    <option value="Religious">Religious</option>
                </Select>
                <Input name="submit" type="submit" label="submit" value="submit"/>
                <Link to="/signin">already have an account?</Link>
            </FormCont>
        </Container>
    );
}
export default CompanySignUpForm;