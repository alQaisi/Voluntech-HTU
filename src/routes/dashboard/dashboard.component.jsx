import { selectUser } from "../../store/user/user.selector";
import UserDashboard from "../userDashboard/userDashboard.component";
import CompanyDashboard from "../CompanyDashBoard/CompanyDashBoard.component";
import useDocumentTitle from '../../utils/useDocumentTitle';
import { useSelector } from "react-redux";

function Dashboard(){
    const user=useSelector(selectUser);
    useDocumentTitle("Dahsboard");
    if(user.user_metadata.type==="user")
        return <UserDashboard/>;
    return <CompanyDashboard/>;
}

export default Dashboard;