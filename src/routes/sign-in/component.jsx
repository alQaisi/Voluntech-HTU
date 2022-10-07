import {Container,FormCont} from './signin.styles';
import { UserSignInContext } from '../../context/UserSignIn.context';
import { useContext } from "react";
import { Link, Input, AuthPagesLogo } from "../../components";

function Component(){
    const {handleInputChange,handleFormSubmission}=useContext(UserSignInContext);
    return(
        <Container>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign in our platform</h2>
                <Input name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <Input name="submit" type="submit" label="submit" value="submit"/>
                <Link to="forgot-password">forgot password?</Link>
                <Link to="/signup">create a new account</Link>
            </FormCont>
        </Container>
    );
}
export default Component;