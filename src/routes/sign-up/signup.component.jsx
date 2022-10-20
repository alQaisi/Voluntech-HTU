import { UserSignUpForm, CompanySignUpForm } from "../../components";
import { Routes,Route,Navigate } from "react-router-dom";
import { Component } from "./Component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";

function SignUp(){
    useDocumentTitle("Sign Up");
    const colorMode=useSelector(selectColorMode);
    return(
        <Routes>
            <Route index element={<Component colorMode={colorMode}/>}/>
            <Route path="signup-users" element={<UserSignUpForm colorMode={colorMode}/>}/>
            <Route path="signup-companies" element={<CompanySignUpForm colorMode={colorMode}/>}/>
            <Route path="*" element={<Navigate to="/signup" replace />}/>
        </Routes>
    );
}
export default SignUp;