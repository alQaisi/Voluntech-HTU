import ProfileProvider from "../context/profile.context";
import Profile from "../routes/profile/profile.component";

function AppProfile(){
    return(
        <ProfileProvider>
            <Profile/>
        </ProfileProvider>
    );
}
export default AppProfile;