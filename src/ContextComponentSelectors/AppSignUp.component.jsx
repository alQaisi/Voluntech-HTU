import SignUp from "../routes/sign-up/signup.component";
import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";

function AppSignUp(){
    return(
        <SignRedirectRoute>
            <SignUp/>
        </SignRedirectRoute>
    );
}
export default AppSignUp;