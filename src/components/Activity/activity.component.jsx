import { ActivityLink, Container, CompanyLogo, InfoSmall, InfoBig, Overlay, TechnologistsIcon, CityIcon, ManageIcon } from "./activity.styles";
import { Delete } from "../workExperience/workExperience.styles";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import Skill from "../skill/skill.component";
function Activity({activityData,deleteCallback}){
    const navigate=useNavigate();
    const {id,logo,cName,data}=activityData;
    const ActivityBody=(
        <Fragment>
            <Overlay/>
            <CompanyLogo src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${logo}`} alt={"comapny name"}/>
            <InfoBig>{data.title}</InfoBig>
            <Skill>{data.skill}</Skill>
            <InfoSmall>By {cName}</InfoSmall>
            <InfoSmall className="withIcon"><CityIcon/>{data.city}</InfoSmall>
            <InfoSmall className="withIcon"><TechnologistsIcon/>{data.number}</InfoSmall>
            <InfoSmall>{data.startDate} - {data.endDate}</InfoSmall>
        </Fragment>
    );
    if(deleteCallback)
        return(
            <Container>
                {ActivityBody}
                <ManageIcon onClick={()=>navigate(`/manage/${id}`)}/>
                <Delete data-id={id} onClick={deleteCallback}/>
            </Container> 
        );
    return(
        <ActivityLink to={`/activity/${id}`} target="_blank" rel="noopener noreferrer">
            <Container>
                {ActivityBody}
            </Container>
        </ActivityLink>
    );
}
export default Activity;