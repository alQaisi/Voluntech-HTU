import {Container,FormCont} from './signin.styles';
import AuthPagesLogo from '../../components/AuthPagesLogo/AuthPagesLogo.component';
import Input from '../../components/input/Input.component';
import { UserSignInContext } from '../../context/UserSignIn.context';
import { useContext,useEffect } from "react";
import Link from "../../components/link/link.component";

function ForgotPassword(){
    const {handleEmailChange,setUserEmail,handleForm2Submission}=useContext(UserSignInContext);
    // eslint-disable-next-line
    useEffect(()=>()=>setUserEmail(),[])
    return(
        <Container>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleForm2Submission}>
                <h2>Sign in with your email</h2>
                <Input name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleEmailChange} />
                <Input name="submit" type="submit" label="submit" value="send link"/>
                <Link to="/signin">back to sign in page</Link>
            </FormCont>
        </Container>
    );
}
export default ForgotPassword;