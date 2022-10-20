import { Container,Message } from "./Error.styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectErrorMessage } from "../../store/user/user.selector";
import { setErrorMessage } from "../../store/user/user.actions";

function Error(){
    const dispatch=useDispatch();
    const errorMessage=useSelector(selectErrorMessage);
    return(
        <>
        {
            errorMessage?
            (<Container>
                <Message>
                    <h3>{errorMessage}</h3>
                    <button onClick={()=>dispatch(setErrorMessage(undefined))}>close</button>
                </Message>
            </Container>)
            :null
        }
        </>
    );
}
export default Error;