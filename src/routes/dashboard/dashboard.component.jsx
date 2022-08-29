import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import UserDashboardC from "../../ContextComponentSelectors/UserDashBoardC";
import CDC from "../../ContextComponentSelectors/CDC.component";
import useDocumentTitle from '../../utils/useDocumentTitle';

function Dashboard(){
    useDocumentTitle("Dahsboard");
    const { user } = useContext(UserContext);
    if(user.user_metadata.type==="user")
        return <UserDashboardC/>;
    return <CDC/>;
}

export default Dashboard;