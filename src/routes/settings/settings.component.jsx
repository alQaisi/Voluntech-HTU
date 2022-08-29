import {useContext} from "react";
import { UserContext } from '../../context/user.context.jsx';
import { UserUpdateContext } from '../../context/userUpdateContext';
import useDocumentTitle from "../../utils/useDocumentTitle";
import AvatarUpload from "../../components/AvatarUpload/AvatarUpload.component.jsx";
import {Container} from "./settings.styles"
import Input from "../../components/input/Input.component.jsx";
import CheckBox from "../../components/CheckBox/CheckBox.component.jsx";
import TextArea from "../../components/TextArea/textarea.component.jsx";


function Settings(){
    const {data,defaultImage,handleInputChange,handleSkillsSelection,handleAvatarChange,handleFormSubmission}=useContext(UserUpdateContext);
    const {user}=useContext(UserContext);
    const skillsSet=data?.skills && Object.keys(data?.skills).map((skill,index)=>(
        <CheckBox key={index} label={skill} name={skill} value={skill} checked={data.skills[skill]} onChange={handleSkillsSelection}/>
    ));
    const wlecomeMessage=user.user_metadata.type==="user"?`Hi ${user.user_metadata.fName}`:`Hi ${user.user_metadata.cName} Organization`;
    useDocumentTitle("Settings");
    return(
        <Container>
            <form onSubmit={handleFormSubmission}>
            <h1>{wlecomeMessage}</h1>
            <p>Use this page to update some of your basic info</p>
            <p>Mind that not all of your info are editable, you need to contact with us if you want to change your name,residence and company type</p>
            <AvatarUpload onChange={handleAvatarChange} bigSize={true} defaultImage={defaultImage}/>
            <Input type="email" name="email" label="email" placeholder={user.email} onChange={handleInputChange}/>
            <Input name="phone" type="phone" label="phone" placeholder={user.user_metadata.phone}  onChange={handleInputChange} />
            <Input name="website" type="text" label="website" placeholder={data.website}  onChange={handleInputChange} />
            <Input name="password" type="password" label="password" placeholder="new password"  onChange={handleInputChange} />
            <TextArea name="description" placeholder={user.user_metadata.description} label="description" maxLength="350" onChange={handleInputChange}/>
            {
                skillsSet?
                <>
                <h2>Skills Set</h2>
                {skillsSet}
                </>
                :<></>
            }
            <Input name="submit" type="submit" label="submit" value="update"/>
            </form>
        </Container>
    );
}
export default Settings;