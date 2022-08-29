import { Container,Half1,Half2,ProfileImage,ProfileLink } from "./profilecard.styles";
import Skill from "../skill/skill.component"
function ProfileCard({id,data}){
    const {fName,lName,phone,skills,imagePath,city}=data;
    const skillsItems=skills.map((skill,index)=><Skill key={index}>{skill}</Skill>)
    return(
        <ProfileLink to={`/profiles/${id}`} target="_blank" rel="noopener noreferrer">
            <Container>
                <Half1>
                    <ProfileImage src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${imagePath}`} alt="user profile" />
                </Half1>
                <Half2>
                    <h2>{`${fName} ${lName}`}</h2>
                    <h5>Lives in {city}</h5>
                    <h5>+962{phone.slice(1)}</h5>
                    <div className="skillsContainer">
                        {skillsItems}
                    </div>
                </Half2>
            </Container>
        </ProfileLink>
    );
}
export default ProfileCard;