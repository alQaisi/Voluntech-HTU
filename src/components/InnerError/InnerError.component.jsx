import { Container } from "./InnerError.styles";
import { ReactComponent as ErrorSvg } from "../../assets/InnerError.svg";

function InnerError(){
    return(
        <Container>
            <ErrorSvg/>
        </Container>
    );
}
export default InnerError;