import Activities from "../routes/Activities/activities.component";
import ActivityCategory from "../routes/ActivityCategory/ActivityCategory.component";
import { useDispatch } from "react-redux";
import { getActivitesAsync,resetActivities } from "../store/activities/activities.actions";
import { Routes,Route,Navigate } from "react-router-dom";
import { useEffect } from "react";


function AppActivities(){
    const dispatch=useDispatch();

    useEffect(()=>{
        let cleanUp=false;
        !cleanUp && dispatch(getActivitesAsync());
        return ()=>{
            cleanUp=true;
            dispatch(resetActivities());
        };
    },[dispatch]);
    
    return(
        <Routes>
            <Route index element={<Activities/>}/>
            <Route path=":category" element={<ActivityCategory/>}/>
            <Route path="*" element={<Navigate to="/activities" replace />}/>
        </Routes>
    );
}
export default AppActivities;