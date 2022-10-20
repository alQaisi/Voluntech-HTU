import { Container } from "./InnerLoading.styles";
import Loader from "../Loader/Loader.component";

function InnerLoading({colorMode}){
    return(
        <Container className={colorMode}><Loader/></Container>
    );
}
export default InnerLoading;