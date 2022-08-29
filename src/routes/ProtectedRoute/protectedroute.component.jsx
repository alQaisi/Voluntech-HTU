import {useContext} from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";
import OuterLoading from '../../components/OuterLoading/OuterLoading.component'

function ProtectedRoute({children}){
    const {user}=useContext(UserContext); 
      if(user===undefined)
        return <OuterLoading type="white"/>
      if(user===null)
        return <Navigate to="/signin" replace />;
    return children;
};

export default ProtectedRoute;