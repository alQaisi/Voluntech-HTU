import Button from "../../components/button/button.component";
import { Fragment, useState } from "react";
import { WorkExperience } from "../../components";
import { useSelector,useDispatch } from "react-redux";
import { selectUserWorkExp } from "../../store/user/user.selector";
import { selectUser } from "../../store/user/user.selector";
import { selectDashboardWorkExp } from "../../store/userDashboard/userDashboard.selectors";
import { setWorkExp } from "../../store/userDashboard/userDashboard.actions";
import { setOuterLoadingType,setErrorMessage } from "../../store/user/user.actions";
import AddWork from "./AddWork.component";
import { updateUserData as updateUserWorkExp } from "../../utils/supabase.utils";

function WorkExperienceCont({colorMode}){
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const workExp=useSelector(selectDashboardWorkExp);
    const userWorkExp=useSelector(selectUserWorkExp);
    if(workExp===undefined){
        dispatch(setWorkExp(userWorkExp));
    }
    const [addWork,toggleAddWork]=useState(false);
    const workExpItems=workExp && workExp.map((item,index)=>(
        <WorkExperience colorMode={colorMode} key={index} id={index} companyName={item.cName} title={item.title} startDate={item.startDate} endDate={item.endDate} city={item.city} country={item.country} deleteCallback={deleteWork}/>
    ));
    function deleteWork({target}){
        const {id}=target.dataset;
        const newWorkExp=[...workExp.slice(0,id),...workExp.slice(+id+1)];
        updateWorkExperience(newWorkExp);
    }
    async function updateWorkExperience(newWorkExp){
        const newData={...user.user_metadata,...{workExp:newWorkExp}};
        try{
            dispatch(setOuterLoadingType("normal"));
            await updateUserWorkExp(user.id,newData);
            dispatch(setWorkExp(newWorkExp));
        }catch(err){
            dispatch(setErrorMessage(err));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
    return(
        <Fragment>
            <Button colorMode={colorMode} onClick={()=>toggleAddWork(!addWork)}>Add Work</Button>
            {workExpItems}
            {addWork && <AddWork colorMode={colorMode} toggleAddWork={toggleAddWork} updateWorkExperience={updateWorkExperience} workExp={workExp}/>}
        </Fragment>
    );
}
export default WorkExperienceCont;