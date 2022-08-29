import UserUpdateProvider from "../context/userUpdateContext";
import UserDashboard from "../routes/userDashboard/userDashboard.component";

function UserDashboardC(){
    return(
        <UserUpdateProvider>
            <UserDashboard/>
        </UserUpdateProvider>
    );
}
export default UserDashboardC;