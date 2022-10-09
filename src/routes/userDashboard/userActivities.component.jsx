import { Children, Fragment, useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import { getUserActivities as getUserActivitiesHelper, deleteUserActivity as deleteUserActivityHelper } from "../../utils/supabase.utils";
import { Applicant } from "../../components";

function UserActivities(){

    const [userActivities,setUserActivities]=useState([]);

    const {user,setErrorMessage,setOuterLoadingType}=useContext(UserContext);

    async function getUserActivities(){
        try{
            setOuterLoadingType("normal");
            const data=await getUserActivitiesHelper(user.id);
            setUserActivities(data.reverse());
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }

    async function deleteUserActivity({target}){
        const {id}=target.dataset;
        try{
            setOuterLoadingType("normal");
            await deleteUserActivityHelper(id);
            window.location.reload(false);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setOuterLoadingType();
        }
    }

    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && getUserActivities();
        return ()=>cleanUp=true;
        //eslint-disable-next-line
    },[])
    const userImage=user.user_metadata.imagePath;
    const activities=Children.toArray(userActivities.map(activity=>(
        <Applicant actData={{...activity,userImage}} deleteCallBack={deleteUserActivity}/>
    )));

    return(
        <Fragment>
            {activities}
        </Fragment>
    )
}
export default UserActivities;