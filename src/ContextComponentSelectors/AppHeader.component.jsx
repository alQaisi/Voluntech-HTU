import Header from "../components/header/header.component";
import { UserMenuProvider } from "../context/UserMenu.context";
import ProtectedRoute from "../routes/ProtectedRoute/protectedroute.component";

function AppHeader(){
    return(
        <UserMenuProvider>
            <ProtectedRoute>
                <Header/>
            </ProtectedRoute>
        </UserMenuProvider>
    );
}
export default AppHeader;