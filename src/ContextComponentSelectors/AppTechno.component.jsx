import TechnologistsProvider from "../context/Technologists.context";
import Technologists from "../routes/technologists/technologists.component";

function AppTechno(){
    return(
        <TechnologistsProvider>
            <Technologists/>
        </TechnologistsProvider>
    );
}
export default AppTechno;