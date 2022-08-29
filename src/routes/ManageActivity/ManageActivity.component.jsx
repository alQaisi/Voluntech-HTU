import { Children, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user.context";
import { getApplicants as getApplicantsHelper, getActivity as getActivityHelper, deleteUserActivity as deleteApplicantHelper, ApproveApplicant as ApproveApplicantHelper, toggleActivity as toggleActivityHelper } from "../../utils/supabase.utils";
import { TechnologistsIcon,CityIcon } from "../../components/Activity/activity.styles";
import { Container,Logo,Title,ActivityBreif,IconCont } from "../Activity/Activity.styles";
import Skill from "../../components/skill/skill.component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import Button from "../../components/button/button.component";
import Applicant from "../../components/applicant/applicant.component";

function ManageActivity(){
    const { actId } =useParams();
    const navigate=useNavigate();
    const [activity,setActivity]=useState(undefined);
    const [applicants,setApplicants]=useState([]);
    const {setOuterLoadingType,setErrorMessage,user}=useContext(UserContext);
    async function ApproveApplicant({target}){
        const {id} =target.dataset;
        try{
            setOuterLoadingType("normal");
            await ApproveApplicantHelper(id);
            window.location.reload(false);
        }catch(err){
            setErrorMessage(err.message);
        }finally{
            setOuterLoadingType();
        }
    }
    async function deleteApplicant({target}){
        const {id} =target.dataset;
        try{
            setOuterLoadingType("normal");
            await deleteApplicantHelper(id);
            window.location.reload(false);
        }catch(err){
            setErrorMessage(err.message);
        }finally{
            setOuterLoadingType();
        }
    }
    async function getApplicants(actId){
        try{
            setOuterLoadingType("normal");
            const activity=await getActivityHelper(actId);
            const applicants=await getApplicantsHelper(actId)
            if(activity.cid!==user.id)
                return navigate(`/activity/${activity.id}`);
            setActivity(activity);
            setApplicants(applicants.reverse());
        }catch(err){
            navigate("/404");
        }finally{
            setOuterLoadingType();
        }
    }
    async function toggleActivity(){
        try{
            setOuterLoadingType("normal");
            const newStatus=activity.status==="pending"?"complete":"pending";
            await toggleActivityHelper(actId,newStatus);
            const newActivity={...activity,status:newStatus};
            setActivity(newActivity);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }
    useEffect(()=>{
        let cleanUp=false;
        if(!cleanUp)
            actId && getApplicants(actId);
        return ()=>cleanUp=true;
        // eslint-disable-next-line
    },[actId]);
    useDocumentTitle(activity?.data?.title || "Loading");
    if(!activity)
        return <></>;
    const activityApplicants=Children.toArray(applicants.map(applicant=>(
        <Applicant actData={applicant} deleteCallBack={deleteApplicant} approveCallBack={ApproveApplicant}/>
    )));
    return(
        <Container>
            <Button onClick={()=>navigate("/dashboard")}>Go Back</Button>
            <Logo src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${activity.logo}`} alt={activity.cName}/>
            <div className="infoContainer">
                <Title>{activity.data.title}</Title>
                <span style={{fontWeight:"500",textTransform:"uppercase",fontSize:"1.25rem"}}>{activity.status}</span>
                <ActivityBreif>{activity.data.description}</ActivityBreif>
                <IconCont><CityIcon/>{activity.data.city}</IconCont>
                <IconCont><TechnologistsIcon/> {activity.data.number}</IconCont>
                <IconCont>{activity.data.startDate+" - "+activity.data.endDate}</IconCont>
                <Skill onClick={()=>navigate(`/activities/${activity.data.skill.toLowerCase()}`)}>{activity.data.skill}</Skill>
                <Button onClick={toggleActivity}>Set {activity.status==="pending"?"complete":"pending"}</Button>
            </div>
            {activityApplicants}
        </Container>
    );
}
export default ManageActivity;
