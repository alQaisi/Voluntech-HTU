import {Container,FormCont} from './signin.styles';
import { UserSignInContext } from '../../context/UserSignIn.context';
import { useContext,useEffect } from "react";
import { Link, Input, AuthPagesLogo } from "../../components";

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