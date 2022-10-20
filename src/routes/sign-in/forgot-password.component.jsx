import {Container,FormCont} from './signin.styles';
import { selectSignInData } from "../../store/signin/signin.selector";
import { setResetEmail } from "../../store/signin/signin.actions";
import { setImageUrl,setErrorMessage } from "../../store/user/user.actions";
import {signInWithEmail as signInWithEmailHelper } from '../../utils/supabase.utils';
import { useSelector,useDispatch } from 'react-redux';
import { Link, Input, AuthPagesLogo } from "../../components";

function ForgotPassword({colorMode}){
    const dispatch=useDispatch();
    const { userEmail }=useSelector(selectSignInData);
    function handleEmailChange(evt){
        const inputElem=evt.target;
        dispatch(setResetEmail(inputElem.value));
    }
    async function handleForm2Submission(evt){
        evt.preventDefault();
        try{
            dispatch(setImageUrl());
            await signInWithEmailHelper(userEmail);
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }
    }
    return(
        <Container className={colorMode}>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleForm2Submission}>
                <h2>Sign in with your email</h2>
                <Input className={colorMode} name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleEmailChange} />
                <Input className={colorMode} name="submit" type="submit" label="submit" value="send link"/>
                <Link to="/signin">back to sign in page</Link>
            </FormCont>
        </Container>
    );
}
export default ForgotPassword;