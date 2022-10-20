import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { OuterLoading, ParticlesContainer } from '../../components';
import { selectUser } from "../../store/user/user.selector";

function SignRedirectRoute({children}){
    const user=useSelector(selectUser); 
    if(user===null)
        return (
            <Fragment>
                {children} 
                <ParticlesContainer/>
            </Fragment>
        );
    if(user)
        return <Navigate to="/" replace />;
    return <OuterLoading type="white"/>;
};

export default SignRedirectRoute;