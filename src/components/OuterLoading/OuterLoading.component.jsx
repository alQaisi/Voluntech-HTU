import AuthPagesLogo from "../AuthPagesLogo/AuthPagesLogo.component";
import Loader from "../Loader/Loader.component";
import { Container } from "./OuterLoading.styles";

function OuterLoading({type}){
    return(
        <Container className={type}>
            <AuthPagesLogo path=""/>
            <Loader loaderType={type}/>
        </Container>
    );
}
export default OuterLoading;