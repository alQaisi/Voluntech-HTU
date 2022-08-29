import {  HashRouter } from 'react-router-dom';
import UserProvider from "../context/user.context";
import App from '../App';


function AppC(){
    return(
        <HashRouter>
            <UserProvider>
                <App/>
            </UserProvider>
        </HashRouter>
    );
}
export default AppC;