import ActivityProvider from "../context/Activity.context";
import Activity from "../routes/Activity/Activity.component";

function AppActivity(){
    return(
        <ActivityProvider>
            <Activity/>
        </ActivityProvider>
    );
}
export default AppActivity;