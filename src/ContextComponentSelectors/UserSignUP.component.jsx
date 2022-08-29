import UserSignUpForm from "../components/UserSignUpForm/UserSignUpForm.component";
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