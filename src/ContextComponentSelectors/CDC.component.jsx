import CompanyDashboardProvider from "../context/CompanyDashboard.context";
import CompanyDashboard from "../routes/CompanyDashBoard/CompanyDashBoard.component";

function CDC(){
    return(
        <CompanyDashboardProvider>
            <CompanyDashboard/>
        </CompanyDashboardProvider>
    );
}
export default CDC;