import { Routes,Route } from "react-router";
import { Navigate } from "react-router-dom";
import UserDashboard from "../userDashboard/userDashboard.component";
import WorkExperienceCont from "./workExperience.container";
import UserActivities from "./userActivities.component";
import { selectColorMode } from "../../store/ui/ui.selectors";
import { useSelector } from "react-redux";
import useDocumentTitle from '../../utils/useDocumentTitle';

function UserDashboardRoute(){
    const colorMode=useSelector(selectColorMode);
    useDocumentTitle("Dahsboard");
    return(
        <Routes>
            <Route path="/" element={<UserDashboard/>}>
                <Route index element={<WorkExperienceCont colorMode={colorMode}/>}/>
                <Route path="work" element={<WorkExperienceCont colorMode={colorMode}/>}/>
                <Route exact path="activities" element={<UserActivities colorMode={colorMode}/>}/>
                <Route path="*" element={<Navigate to="/404" replace />}/>
            </Route>
        </Routes>
    );
}
export default UserDashboardRoute;