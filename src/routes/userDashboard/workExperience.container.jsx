import Button from "../../components/button/button.component";
import { Fragment, useEffect, useState } from "react";
import { WorkExperience } from "../../components";
import { useSelector,useDispatch } from "react-redux";
import { selectUserWorkExp } from "../../store/user/user.selector";
import { selectUser } from "../../store/user/user.selector";
import { selectDashboardWorkExp } from "../../store/userDashboard/userDashboard.selectors";
import { setWorkExp,resetUserWork,updateUserWork } from "../../store/userDashboard/userDashboard.actions";
import AddWork from "./AddWork.component";

function WorkExperienceCont({colorMode}){
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const workExp=useSelector(selectDashboardWorkExp);
    const userWorkExp=useSelector(selectUserWorkExp);
    const [addWork,toggleAddWork]=useState(false);
    const workExpItems=workExp && workExp.map((item,index)=>(
        <WorkExperience colorMode={colorMode} key={index} id={index} companyName={item.cName} title={item.title} startDate={item.startDate} endDate={item.endDate} city={item.city} country={item.country} deleteCallback={deleteWork}/>
    ));
    function deleteWork({target}){
        const {id}=target.dataset;
        const newWorkExp=[...workExp.slice(0,id),...workExp.slice(+id+1)];
        updateWorkExperience(newWorkExp);
    }
    function updateWorkExperience(newWorkExp){
        dispatch(updateUserWork(newWorkExp,user));
    }

    useEffect(()=>{
        !workExp && dispatch(setWorkExp(userWorkExp));
        return ()=>dispatch(resetUserWork());
        //eslint-disable-next-line
    },[dispatch]);

    return(
        <Fragment>
            <Button colorMode={colorMode} onClick={()=>toggleAddWork(!addWork)}>Add Work</Button>
            {workExpItems}
            {addWork && <AddWork colorMode={colorMode} toggleAddWork={toggleAddWork} updateWorkExperience={updateWorkExperience} workExp={workExp}/>}
        </Fragment>
    );
}
export default WorkExperienceCont;