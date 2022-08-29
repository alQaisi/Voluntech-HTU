import Settings from "../routes/settings/settings.component";
import UserUpdateProvider from "../context/userUpdateContext";

function UserUpdateProfile(){
    return(
        <UserUpdateProvider>
            <Settings/>
        </UserUpdateProvider>
    );
}
export default UserUpdateProfile;