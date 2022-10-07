import Button from "../../components/button/button.component";
import { Fragment, useState, useContext } from "react";
import { UserUpdateContext } from "../../context/userUpdateContext";
import { WorkExperience } from "../../components";
import AddWork from "./AddWork.component";

function WorkExperienceCont(){
    const [addWork,toggleAddWork]=useState(false);
    const { data,updateWorkExperience }=useContext(UserUpdateContext);
    const workExp=data.workExp;
    const workExpItems=workExp.map((item,index)=>(
        <WorkExperience key={index} id={index} companyName={item.cName} title={item.title} startDate={item.startDate} endDate={item.endDate} city={item.city} country={item.country} deleteCallback={deleteWork}/>
    ));
    function deleteWork({target}){
        const {id}=target.dataset;
        const newWorkExp=[...workExp.slice(0,id),...workExp.slice(+id+1)];
        updateWorkExperience(newWorkExp);
    }
    return(
        <Fragment>
            <Button onClick={()=>toggleAddWork(!addWork)}>Add Work</Button>
            {workExpItems}
            {addWork && <AddWork toggleAddWork={toggleAddWork} updateWorkExperience={updateWorkExperience} workExp={workExp}/>}
        </Fragment>
    );
}
export default WorkExperienceCont;