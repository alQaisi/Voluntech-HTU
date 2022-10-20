import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";
import SignIn from "../routes/sign-in/signin.component";

function SigninWrapped(){
    return(
        <SignRedirectRoute>
            <SignIn/>
        </SignRedirectRoute>
    );
}
export default SigninWrapped;