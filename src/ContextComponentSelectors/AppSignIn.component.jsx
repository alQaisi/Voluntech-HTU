import UserSignInProvider from "../context/UserSignIn.context";
import SignIn from "../routes/sign-in/signin.component";
import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";

function AppSignIn(){
    return(
        <UserSignInProvider>
            <SignRedirectRoute>
                <SignIn/>
            </SignRedirectRoute>
        </UserSignInProvider>
    );
}
export default AppSignIn