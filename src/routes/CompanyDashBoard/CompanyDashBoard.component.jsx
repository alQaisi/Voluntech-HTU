import { Container } from "./CompanyDashBoard.styles";
import Button from "../../components/button/button.component";
import Activity from "../../components/Activity/activity.component";
import AddActivity from "./addActivity";
import Pagination from '../../components/pagination/pagination.component';
import { useState,useContext,Children  } from "react";
import { CompanyDashboardContext } from "../../context/CompanyDashboard.context";

function CompanyDashboard(){
    const { addActivity, activites,deleteActivity }=useContext(CompanyDashboardContext);
    const [addActivityStatus,setAddActivityStatus]=useState(false);
    function toggleAddActivity(){
        setAddActivityStatus(!addActivityStatus);
    }
    function deleteCallback(evt){
        const {id}=evt.target.dataset;
        deleteActivity(id);
    }
    const activitesItems=Children.toArray(activites.map(item=>(<Activity activityData={item} deleteCallback={deleteCallback}/>)));
    return(
        <Container>
            <Button onClick={toggleAddActivity}>Add Activity</Button>
            <Pagination items={activitesItems} pageSize={5}/>
            {addActivityStatus &&  <AddActivity toggleAddActivity={toggleAddActivity} addActivity={addActivity}/>}
        </Container>
    );
};
export default CompanyDashboard;