import { Container,Message } from "./Error.styles";
import { useContext } from "react";
import { UserContext } from '../../context/user.context'

function Error(){
    const {errorMessage,setErrorMessage}=useContext(UserContext);
    return(
        <>
        {
            errorMessage?
            (<Container>
                <Message>
                    <h3>{errorMessage}</h3>
                    <button onClick={()=>setErrorMessage(undefined)}>close</button>
                </Message>
            </Container>)
            :null
        }
        </>
    );
}
export default Error;