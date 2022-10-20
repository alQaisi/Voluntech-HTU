import { useSelector,useDispatch } from 'react-redux';
import { selectSignInData } from "../../store/signin/signin.selector";
import { setUserInfo } from "../../store/signin/signin.actions";
import { setOuterLoadingType,setErrorMessage,setImageUrl } from '../../store/user/user.actions';
import { selectImageUrl } from "../../store/user/user.selector";
import {Container,FormCont} from './signin.styles';
import { Link, Input, AuthPagesLogo } from "../../components";
import { useEffect } from "react";
import {signIn as signInHelper } from '../../utils/supabase.utils';

function Component({colorMode}){
    const dispatch=useDispatch();
    const { userInfo }=useSelector(selectSignInData);
    const imageUrl=useSelector(selectImageUrl);

    function handleInputChange(evt){
        const inputElem=evt.target;
        const newUserInfo={...userInfo,[inputElem.name]:inputElem.value}
        dispatch(setUserInfo(newUserInfo));
    }

    async function handleFormSubmission(evt){
        const check=userInfo.email!=="" && userInfo.password!=="";
        if(!check)
            return 0;
        evt.preventDefault();
        try{
            dispatch(setOuterLoadingType("white"));
            await signInHelper(userInfo);
        }catch(error){
            dispatch(setErrorMessage(error.message));
        }finally{
            dispatch(setOuterLoadingType());
        }
    }
    useEffect(()=>{
        if(imageUrl)
            dispatch(setImageUrl());
        return ()=>dispatch(setUserInfo({email:"",password:""}));
    },[dispatch,imageUrl]);
    return(
        <Container className={colorMode}>
            <AuthPagesLogo path=""/>
            <FormCont onSubmit={handleFormSubmission}>
                <h2>Sign in our platform</h2>
                <Input className={colorMode} name="email" type="email" label="Email" placeholder="Email Address" required onChange={handleInputChange} />
                <Input className={colorMode} name="password" type="password" label="password" placeholder="Password" required onChange={handleInputChange} />
                <Input className={colorMode} name="submit" type="submit" label="submit" value="submit"/>
                <Link to="forgot-password">forgot password?</Link>
                <Link to="/signup">create a new account</Link>
            </FormCont>
        </Container>
    );
}
export default Component;