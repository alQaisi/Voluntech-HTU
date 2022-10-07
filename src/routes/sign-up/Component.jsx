import {SignUpCont,SignType,UserIcon,CompanyIcon} from './signup.styles';
import { useNavigate } from 'react-router';
import { AuthPagesLogo } from "../../components";

export function Component(){
    const navigate=useNavigate();
    return(
        <SignUpCont>
            <AuthPagesLogo path=""/>
            <div className="typesCont">
                <SignType onClick={()=>navigate("signup-companies")}>
                    <CompanyIcon/>
                    <h1>Company</h1>
                </SignType>
                <SignType onClick={()=>navigate("signup-users")}>
                    <UserIcon/>
                    <h1>User</h1>
                </SignType>
                </div>
        </SignUpCont>
    );
}
