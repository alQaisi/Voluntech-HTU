import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { OuterLoading } from '../../components'

function ProtectedRoute({children}){
    const user=useSelector(state=>state.user.user);
      if(user===undefined)
        return <OuterLoading type="white"/>
      if(user===null)
        return <Navigate to="/signin" replace />;
    return children;
};

export default ProtectedRoute;