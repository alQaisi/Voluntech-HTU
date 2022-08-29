import { useContext,Fragment } from "react";
import { UserContext } from "../../context/user.context";
import { Navigate } from "react-router-dom";
import OuterLoading from '../../components/OuterLoading/OuterLoading.component'
import ParticlesContainer from "../../components/ParticlesContainer/ParticlesContainer.component";

function SignRedirectRoute({children}){
    const {user}=useContext(UserContext); 
    if(user===null)
        return (
            <Fragment>
                {children} 
                <ParticlesContainer/>
            </Fragment>
        );
    if(user)
        return <Navigate to="/" replace />;
    return <OuterLoading type="white"/>
};

export default SignRedirectRoute;