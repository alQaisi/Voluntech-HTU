import { Routes,Route,Navigate } from "react-router-dom";
import ForgotPassword from "./forgot-password.component";
import Component from "./component";
import useDocumentTitle from "../../utils/useDocumentTitle";


function SignIn(){
    useDocumentTitle("Sign In");
    return(
        <Routes>
            <Route index element={<Component/>}/>
            <Route path="forgot-password" element={<ForgotPassword/>}/>
            <Route path="*" element={<Navigate to="/signin" replace />}/>
        </Routes>
    );
}
export default SignIn;