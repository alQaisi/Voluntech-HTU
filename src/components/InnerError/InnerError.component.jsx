import { Container } from "./InnerError.styles";
import { ReactComponent as ErrorSvg } from "../../assets/InnerError.svg";

function InnerError({colorMode}){
    return(
        <Container className={colorMode}>
            <ErrorSvg/>
        </Container>
    );
}
export default InnerError;