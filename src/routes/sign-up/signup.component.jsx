import CompanySignUp from "../../ContextComponentSelectors/CompanySignUP.component";
import UserSignUp from "../../ContextComponentSelectors/UserSignUP.component";
import { Routes,Route,Navigate } from "react-router-dom";
import { Component } from "./Component";
import useDocumentTitle from "../../utils/useDocumentTitle";

function SignUp(){
    useDocumentTitle("Sign Up");
    return(
        <Routes>
            <Route index element={<Component/>}/>
            <Route path="signup-users" element={<UserSignUp/>}/>
            <Route path="signup-companies" element={<CompanySignUp/>}/>
            <Route path="*" element={<Navigate to="/signup" replace />}/>
        </Routes>
    );
}
export default SignUp;