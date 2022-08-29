import ActivitesProvider from "../context/Activities.context";
import Activities from "../routes/Activities/activities.component";
import ActivityCategory from "../routes/ActivityCategory/ActivityCategory.component";
import { Routes,Route,Navigate } from "react-router-dom";

function AppActivities(){
    return(
        <ActivitesProvider>
            <Routes>
                <Route index element={<Activities/>}/>
                <Route path=":category" element={<ActivityCategory/>}/>
                <Route path="*" element={<Navigate to="/activities" replace />}/>
            </Routes>
        </ActivitesProvider>
    );
}
export default AppActivities;