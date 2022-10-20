import { Children,useEffect,Fragment } from "react";
import { deleteUserActivitiesAsync,getUserActivitiesAsync } from "../../store/userDashboard/userDashboard.actions.js";
import { selectUserActivities } from "../../store/userDashboard/userDashboard.selectors.js";
import { selectUser } from "../../store/user/user.selector";
import { useSelector,useDispatch } from "react-redux";
import { Applicant } from "../../components";

function UserActivities({colorMode}){
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const userActivities=useSelector(selectUserActivities);

    function deleteUserActivity({target}){
        const {id}=target.dataset;
        dispatch(deleteUserActivitiesAsync(id,userActivities));
    }

    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && dispatch(getUserActivitiesAsync(user.id));
        return ()=>cleanUp=true;
        //eslint-disable-next-line
    },[])
    const userImage=user.user_metadata.imagePath;
    const activities=userActivities && Children.toArray(userActivities.map(activity=>(
        <Applicant colorMode={colorMode} actData={{...activity,userImage}} deleteCallBack={deleteUserActivity}/>
    )));

    return(
        <Fragment>
            {activities}
        </Fragment>
    );
}
export default UserActivities;