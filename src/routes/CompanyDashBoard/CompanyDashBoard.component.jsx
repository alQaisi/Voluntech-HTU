import { Container } from "./CompanyDashBoard.styles";
import { Button, Activity } from "../../components";
import AddActivity from "./addActivity";
import Pagination from '../../components/pagination/pagination.component';
import { useEffect,useState,Children  } from "react";
import { selectCompanyActivities } from "../../store/company-dashboard/companyDashboard.selectors";
import { updateActivitiesLogo,addNewActivityAsync,deleteActivityAsync,getCompanyActivitesAsync } from "../../store/company-dashboard/companyDashboard.actions";
import { setErrorMessage } from "../../store/user/user.actions";
import { selectUser } from "../../store/user/user.selector";
import { useSelector,useDispatch } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";
import useDocumentTitle from '../../utils/useDocumentTitle';

function CompanyDashboard(){
    useDocumentTitle("Dahsboard");
    const dispatch=useDispatch();
    const colorMode=useSelector(selectColorMode);
    const user=useSelector(selectUser);
    const { imagePath }=user.user_metadata;
    const activities=useSelector(selectCompanyActivities);
    const [addActivityStatus,setAddActivityStatus]=useState(false);
    
    useEffect(()=>{
        const cid=user.id;
        activities===undefined && dispatch(getCompanyActivitesAsync(cid));
        //eslint-disable-next-line
    },[]);

    useEffect(()=>{
        if(activities?.length){
            const oldLogo=activities[0].logo;
            oldLogo!==imagePath && dispatch(updateActivitiesLogo(imagePath,activities));
        }
    },[imagePath,dispatch,activities]);

    useEffect(()=>{
        if(addActivityStatus)
            setAddActivityStatus(false);
        //eslint-disable-next-line
    },[activities])

    function addActivity(data){
        const cid=user.id;
        const logo=user.user_metadata.imagePath;
        const cName=user.user_metadata.cName;
        if(data.skill==="" || data.skill==="Select Category")
            return dispatch(setErrorMessage("Choose the category of your activity"));
        if(data.city==="" || data.city==="Select City")
            return dispatch(setErrorMessage("Choose the city for your activity"));
        if(data.endDate==="" || data.endDate===undefined)
            return dispatch(setErrorMessage("Set the end time of your activity"));
        dispatch(addNewActivityAsync(cid,cName,logo,data,activities));
    }
    
    function toggleAddActivity(){
        setAddActivityStatus(!addActivityStatus);
    }

    function deleteCallback(evt){
        const {id}=evt.target.dataset;
        dispatch(deleteActivityAsync(id,activities));
    }

    const activitesItems=activities && Children.toArray(activities.map(item=>(<Activity colorMode={colorMode} activityData={item} deleteCallback={deleteCallback}/>)));

    return(
        <Container className={colorMode}>
            <Button colorMode={colorMode} onClick={toggleAddActivity}>Add Activity</Button>
            <Pagination items={activitesItems || []} pageSize={5}/>
            {addActivityStatus &&  <AddActivity colorMode={colorMode} toggleAddActivity={toggleAddActivity} addActivity={addActivity}/>}
        </Container>
    );
};
export default CompanyDashboard;