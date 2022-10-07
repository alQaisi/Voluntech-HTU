import { Container,Logo,Title,ActivityBreif,IconCont } from "./Activity.styles";
import { Button, Link, Skill } from "../../components";
import { useParams,useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState, Fragment } from "react";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { TechnologistsIcon,CityIcon } from "../../components/Activity/activity.styles";
import { ActivityContext } from "../../context/Activity.context";
import ApplyToActivity from "./ApplytoActivity.component";

function Activity(){

    const [ApplyStatus,setApplyStatus]=useState(false);
    function toggleApply(){
        setApplyStatus(!ApplyStatus);
    }

    const {activity,getActivity,type,imagePath,applyToActivity}=useContext(ActivityContext);
    const { actId } =useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        let cleanUp=false;
        if(!cleanUp)
            actId && getActivity(actId);
        return ()=>cleanUp=true;
        // eslint-disable-next-line
    },[actId]);

    const {id,cid,cName,logo,data}=activity || {};
    useDocumentTitle(data?.title || "Loading");

    const defaultImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";
    const actImage=`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${logo}`;

    if(!activity?.data)
        return <Fragment></Fragment>;
    
    return(
        <Fragment>
            <Container id={id}>
                <Button onClick={()=>navigate("/")}>Go Back</Button>
                <Logo src={logo?actImage:defaultImage} alt={cName}/>
                <Link to={`/profiles/${cid}`}>{ cName }</Link>
                <div className="infoContainer">
                    <Title>{data.title}</Title>
                    <ActivityBreif>{data.description}</ActivityBreif>
                    <IconCont><CityIcon/>{data.city}</IconCont>
                    <IconCont><TechnologistsIcon/> {data.number}</IconCont>
                    <IconCont>{data.startDate+" - "+data.endDate}</IconCont>
                    <Skill onClick={()=>navigate(`/activities/${data.skill.toLowerCase()}`)}>{data.skill}</Skill>
                    { type==="user" && <Button onClick={toggleApply}>Volunteer</Button> }   
                </div>
            </Container>
            { ApplyStatus && <ApplyToActivity toggleApply={toggleApply} imagePath={imagePath} applyToActivity={applyToActivity}/> }
        </Fragment>
    );
}
export default Activity;