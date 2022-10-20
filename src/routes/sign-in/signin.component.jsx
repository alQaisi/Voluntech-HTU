import { Routes,Route,Navigate } from "react-router-dom";
import ForgotPassword from "./forgot-password.component";
import Component from "./component";
import useDocumentTitle from "../../utils/useDocumentTitle";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";

function SignIn(){
    useDocumentTitle("Sign In");
    const colorMode=useSelector(selectColorMode);
    return(
        <Routes>
            <Route index element={<Component colorMode={colorMode}/>}/>
            <Route path="forgot-password" element={<ForgotPassword colorMode={colorMode}/>}/>
            <Route path="*" element={<Navigate to="/signin" replace />}/>
        </Routes>
    );
}
export default SignIn;