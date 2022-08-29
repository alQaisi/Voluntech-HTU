import CompaniesProvider from "../context/Companies.context";
import Companies from "../routes/companies/companies.component";

function AppCompanies(){
    return(
        <CompaniesProvider>
            <Companies/>
        </CompaniesProvider>
    );
}
export default AppCompanies;