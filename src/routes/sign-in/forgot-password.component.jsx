import {Container,FormCont} from './signin.styles';
import { UserSignInContext } from '../../context/UserSignIn.context';
import { useContext } from "react";
import { Link, Input, AuthPagesLogo } from "../../components";

function ForgotPassword(){
    const {handleEmailChange,handleForm2Submission}=useContext(UserSignInContext);
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