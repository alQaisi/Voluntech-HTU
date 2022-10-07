import {  BrowserRouter } from 'react-router-dom';
import UserProvider from "../context/user.context";
import App from '../App';


function AppC(){
    return(
        <BrowserRouter>
            <UserProvider>
                <App/>
            </UserProvider>
        </BrowserRouter>
    );
}
export default AppC;