import {useContext} from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";
import ManageActivity from "../ManageActivity/ManageActivity.component";

function Manage(){
    const {user}=useContext(UserContext); 
    if(user.user_metadata.type==="user")
        return <Navigate to="/" replace />;
    return <ManageActivity/>
}
export default Manage;