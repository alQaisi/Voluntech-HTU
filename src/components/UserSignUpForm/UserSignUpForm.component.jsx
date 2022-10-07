import { useContext } from 'react';
import { UserSignUpContext } from '../../context/UserSignUp.context';
import { FormCont,Container } from './UserSignUpForm.styles';
import { Input, AvatarUpload, CheckBox, Select, TextArea, AuthPagesLogo, Link } from "../";
import Cities from '../../assets/cities.json';

function UserSignUpForm(){
    const {userValues,handleFormSubmission,handleCitySelection,handleInputChange,handleSkillsSelection,handleAvatarChange}=useContext(UserSignUpContext);
    const options=Cities.map((city,index)=><option value={city} key={index}>{city}</option>);
    return(
        <Container>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign Up to our platform</h2>
                <AvatarUpload onChange={handleAvatarChange}/>
                <Input name="fName" type="text" label="First Name" placeholder="First Name" required onChange={handleInputChange} />
                <Input name="lName" type="text" label="Last Name" placeholder="Last Name" required onChange={handleInputChange} />
                <Input name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input name="phone" type="tel" label="phone" placeholder="Phone Number" required onChange={handleInputChange} />
                <Input name="website" type="text" label="website" placeholder="Website" required onChange={handleInputChange} />
                <Input name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <h2>Select City</h2>
                <Select label={"City"} value={userValues.city} onChange={handleCitySelection}>{options}</Select>
                <TextArea name="description" placeholder="Type a breif description about yourself (350 characters max)" label="description" maxLength="350" required onChange={handleInputChange}/>
                <h2>Skills Set</h2>
                <CheckBox label="Mobile" name="skills" value="Mobile" onChange={handleSkillsSelection}/>
                <CheckBox label="Hardware" name="skills" value="Hardware" onChange={handleSkillsSelection}/>
                <CheckBox label="Data" name="skills" value="Data" onChange={handleSkillsSelection}/>
                <CheckBox label="Design" name="skills" value="Design" onChange={handleSkillsSelection}/>
                <CheckBox label="Websites" name="skills" value="Websites" onChange={handleSkillsSelection}/>
                <Input name="submit" type="submit" label="submit" value="submit"/>
                <Link to="/signin">already have an account?</Link>
            </FormCont>
        </Container>
    );
}
export default UserSignUpForm;