import { Container,Logo,Title,ActivityBreif,IconCont } from "./Activity.styles";
import { Button, Link, Skill } from "../../components";
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState, Fragment } from "react";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { TechnologistsIcon,CityIcon } from "../../components/Activity/activity.styles";
import ApplyToActivity from "./ApplytoActivity.component";
import { useDispatch,useSelector } from 'react-redux';
import { setErrorMessage,setOuterLoadingType } from "../../store/user/user.actions.js";
import { selectUser } from "../../store/user/user.selector.js";
import { applyToActivity as applyToActivityHelper } from "../../utils/supabase.utils";
import { selectCurrentActivity } from "../../store/activity/activity.selectors";
import { getActivityAsync,setActivityIsError } from "../../store/activity/activity.actions";
import { selectColorMode } from "../../store/ui/ui.selectors";

function Activity(){
    const dispatch=useDispatch();
    const colorMode=useSelector(selectColorMode);
    const user=useSelector(selectUser);
    const { type }=user.user_metadata;
    const [ApplyStatus,setApplyStatus]=useState(false);
    const { activity,isActivityError }=useSelector(selectCurrentActivity);
    const { actId } =useParams();
    const navigate=useNavigate();

    function toggleApply(){
        setApplyStatus(!ApplyStatus);
    }

    async function applyToActivity(data){
        if(data.endDate==="" || data.endDate===undefined)
            return dispatch(setErrorMessage("Set the end time of your activity"));
        try{
            dispatch(setOuterLoadingType("white"));
            await applyToActivityHelper(`${activity.id}${user.id}`,activity.cid,user.id,activity.id,activity.data.title,data);
            toggleApply();
        }catch(err){
            dispatch(setErrorMessage("You have already applied for this activity"));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }

    useEffect(()=>{
        let cleanUp=false;
        // eslint-disable-next-line
        if(!cleanUp && actId!=activity?.id)
            actId && dispatch(getActivityAsync(actId));
        return ()=>{
            cleanUp=true;
            // dispatch(resetCurrentActivity());
        };
        // eslint-disable-next-line
    },[actId,dispatch]);

    useEffect(()=>{
        if(isActivityError)
        dispatch(setActivityIsError(false)) && navigate("/404");
    },[isActivityError,navigate,dispatch])

    const {id,cid,cName,logo,data}=activity || {};
    useDocumentTitle(data?.title || "Loading");

    const defaultImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png";
    const actImage=`https://nrhsumqatauurhjsswzq.supabase.co/storage/v1/object/public/avatars/${logo}`;
    
    // eslint-disable-next-line
    if(!activity?.data || actId!=activity?.id)
        return <Fragment></Fragment>;
    
    return(
        <Fragment>
            <Container className={colorMode} id={id}>
                <Button colorMode={colorMode} onClick={()=>navigate("/")}>Go Back</Button>
                <Logo src={logo?actImage:defaultImage} alt={cName}/>
                <Link to={`/profiles/${cid}`}>{ cName }</Link>
                <div className="infoContainer">
                    <Title>{data.title}</Title>
                    <ActivityBreif>{data.description}</ActivityBreif>
                    <IconCont><CityIcon/>{data.city}</IconCont>
                    <IconCont><TechnologistsIcon/> {data.number}</IconCont>
                    <IconCont>{data.startDate+" - "+data.endDate}</IconCont>
                    <Skill colorMode={colorMode} onClick={()=>navigate(`/activities/${data.skill.toLowerCase()}`)}>{data.skill}</Skill>
                    { type==="user" && <Button colorMode={colorMode} onClick={toggleApply}>Volunteer</Button> }   
                </div>
            </Container>
            { ApplyStatus && <ApplyToActivity colorMode={colorMode} toggleApply={toggleApply} applyToActivity={applyToActivity}/> }
        </Fragment>
    );
}
export default Activity;