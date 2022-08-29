import {Container,UserAvatar,UserType,UserName,UserBreif,Website,Email} from "./profile.styles";
import { useParams,useNavigate } from 'react-router-dom';
import { useContext,useEffect, Fragment, Children } from "react";
import { ProfileContext } from "../../context/profile.context";
import Skill from "../../components/skill/skill.component";
import Button from "../../components/button/button.component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import WorkExperience from "../../components/workExperience/workExperience.component";

function Profile(){
    const {profile,getProfile}=useContext(ProfileContext);
    const { userId } =useParams();
    
    useEffect(()=>{
        let cleanUp=false;
        if(!cleanUp)
            userId && getProfile(userId);
        return ()=>cleanUp=true;
        // eslint-disable-next-line
    },[userId]);

    const {fName,lName,skills,city,cName,cType,description,email,imagePath,phone,website,workExp}=profile?.data || {};
    const skillItems=Children.toArray(skills?.map(skill=><Skill>{skill}</Skill>));

    const workItems=Children.toArray(workExp?.map(item=>(
        <WorkExperience companyName={item.cName} title={item.title} startDate={item.startDate} endDate={item.endDate} city={item.city} country={item.country}/>
    )));

    const defaultImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";
    const userImage=`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${imagePath}`;

    const navigate=useNavigate();

    const title=fName?`${fName+" "+lName}`:cName;
    useDocumentTitle(title || "Loading");

    if(!profile?.data)
        return <></>;
    return(
        <Container>
            <Button onClick={()=>navigate("/")}>Go Back</Button>
            <UserAvatar src={imagePath?userImage:defaultImage} alt="avatar" />
            <UserName>{cName || fName+" "+lName}</UserName>
            {city && <h4>Lives in {city}</h4>}
            <h4>{"+962"+phone?.slice(1)}</h4>
            <div className="infoContainer">
                <UserType>{ cType? `Company (${cType})` :"Technologists"}</UserType>
                <UserBreif>{description}</UserBreif>
                <div className="contactItems">
                    <Website href={website}>Open Website</Website>
                    <Email href={`mailto: ${email}`}>Send Email</Email>
                </div>
                {skills && <div className="skills">
                    <h3>Skill Set</h3>
                    <div className="skillItems">
                        {skillItems}
                    </div>
                </div>}
                {workExp &&(
                    <Fragment>
                        <h3>Work Experience</h3>
                        {workItems}
                    </Fragment>
                )}
            </div>
        </Container>
    );
}
export default Profile;