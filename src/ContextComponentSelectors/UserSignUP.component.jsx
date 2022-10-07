import { UserSignUpForm } from "../components";
import { UserSignUpContextProvider } from "../context/UserSignUp.context";
import SignRedirectRoute from "../routes/SignRedirectRoute/SignRedirectRoute.component";

function UserSignUp(){
    return(
        <UserSignUpContextProvider>
            <SignRedirectRoute>
                <UserSignUpForm/>
            </SignRedirectRoute>
        </UserSignUpContextProvider>
    );
}
export default UserSignUp;