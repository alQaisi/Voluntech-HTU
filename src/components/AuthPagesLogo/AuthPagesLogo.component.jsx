import { WhiteLogo } from "./AuthPagesLogo.styles";
import { useNavigate } from 'react-router';


export default function AuthPagesLogo({path}){
    const navigate=useNavigate();
    function handleLogoClick(){
        navigate(`/${path}`);
    }
    return(
        <WhiteLogo onClick={handleLogoClick}/>
    );
}
