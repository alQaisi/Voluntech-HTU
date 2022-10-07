import { CompanySignUpForm } from "../components";
import { CompanySignUpContextProvider } from "../context/CompanySignUp.context";
import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";


function CompanySignUp(){
    return(
        <CompanySignUpContextProvider>
            <SignRedirectRoute>
                <CompanySignUpForm/>
            </SignRedirectRoute>
        </CompanySignUpContextProvider>
    );
}
export default CompanySignUp;