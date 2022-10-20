import { Navigate } from "react-router-dom";
import ManageActivity from "../ManageActivity/ManageActivity.component";
import { selectUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";

function Manage(){
    const user=useSelector(selectUser); 
    if(user.user_metadata.type==="user")
        return <Navigate to="/" replace />;
    return <ManageActivity/>
}
export default Manage;