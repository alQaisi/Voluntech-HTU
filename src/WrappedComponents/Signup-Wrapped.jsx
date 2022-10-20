import SignUp from "../routes/sign-up/signup.component";
import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";


function SignUpWrapped(){
    return(
        <SignRedirectRoute>
            <SignUp/>
        </SignRedirectRoute>
    );
}
export default SignUpWrapped;