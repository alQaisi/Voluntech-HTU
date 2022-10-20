import { Children, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getApplicants as getApplicantsHelper, getActivity as getActivityHelper, deleteUserActivity as deleteApplicantHelper, ApproveApplicant as ApproveApplicantHelper, toggleActivity as toggleActivityHelper } from "../../utils/supabase.utils";
import { TechnologistsIcon,CityIcon } from "../../components/Activity/activity.styles";
import { Container,Logo,Title,ActivityBreif,IconCont } from "../Activity/Activity.styles";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { Skill, Button, Applicant } from "../../components";
import { selectUser } from "../../store/user/user.selector";
import { useSelector,useDispatch } from "react-redux";
import { setOuterLoadingType,setErrorMessage } from "../../store/user/user.actions";
import { selectColorMode } from "../../store/ui/ui.selectors";

function ManageActivity(){
    const dispatch=useDispatch();
    const colorMode=useSelector(selectColorMode);
    const { actId } =useParams();
    const navigate=useNavigate();
    const [activity,setActivity]=useState(undefined);
    const [applicants,setApplicants]=useState([]);
    const user=useSelector(selectUser);
    async function ApproveApplicant({target}){
        const {id} =target.dataset;
        try{
            dispatch(setOuterLoadingType("normal"));
            await ApproveApplicantHelper(id);
            window.location.reload(false);
        }catch(err){
            dispatch(setErrorMessage(err.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
    async function deleteApplicant({target}){
        const {id} =target.dataset;
        try{
            dispatch(setOuterLoadingType("normal"));
            await deleteApplicantHelper(id);
            window.location.reload(false);
        }catch(err){
            dispatch(setErrorMessage(err.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
    async function getApplicants(actId){
        try{
            dispatch(setOuterLoadingType("normal"));
            const activity=await getActivityHelper(actId);
            const applicants=await getApplicantsHelper(actId)
            if(activity.cid!==user.id)
                return navigate(`/activity/${activity.id}`);
            setActivity(activity);
            setApplicants(applicants.reverse());
        }catch(err){
            navigate("/404");
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
    async function toggleActivity(){
        try{
            dispatch(setOuterLoadingType("normal"));
            const newStatus=activity.status==="pending"?"complete":"pending";
            await toggleActivityHelper(actId,newStatus);
            const newActivity={...activity,status:newStatus};
            setActivity(newActivity);
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
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
        <Applicant colorMode={colorMode} actData={applicant} deleteCallBack={deleteApplicant} approveCallBack={ApproveApplicant}/>
    )));
    return(
        <Container className={colorMode}>
            <Button colorMode={colorMode} onClick={()=>navigate("/dashboard")}>Go Back</Button>
            <Logo src={`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${activity.logo}`} alt={activity.cName}/>
            <div className="infoContainer">
                <Title>{activity.data.title}</Title>
                <span className="actStatus" style={{fontWeight:"500",textTransform:"uppercase",fontSize:"1.25rem"}}>{activity.status}</span>
                <ActivityBreif>{activity.data.description}</ActivityBreif>
                <IconCont><CityIcon/>{activity.data.city}</IconCont>
                <IconCont><TechnologistsIcon/> {activity.data.number}</IconCont>
                <IconCont>{activity.data.startDate+" - "+activity.data.endDate}</IconCont>
                <Skill colorMode={colorMode} onClick={()=>navigate(`/activities/${activity.data.skill.toLowerCase()}`)}>{activity.data.skill}</Skill>
                <Button colorMode={colorMode} onClick={toggleActivity}>Set {activity.status==="pending"?"complete":"pending"}</Button>
            </div>
            {activityApplicants}
        </Container>
    );
}
export default ManageActivity;
