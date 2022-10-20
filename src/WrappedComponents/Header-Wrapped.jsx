import Header from "../components/header/header.component";
import ProtectedRoute from "../routes/ProtectedRoute/protectedroute.component";

function HeaderWrapped(){
    return(
        <ProtectedRoute>
            <Header/>
        </ProtectedRoute>
    );
}
export default HeaderWrapped;