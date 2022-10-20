import AuthPagesLogo from "../AuthPagesLogo/AuthPagesLogo.component";
import Loader from "../Loader/Loader.component";
import { Container } from "./OuterLoading.styles";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";

function OuterLoading({type}){
    const colorMode=useSelector(selectColorMode);
    return(
        <Container className={`${type} ${colorMode}`}>
            <AuthPagesLogo path=""/>
            <Loader loaderType={type}/>
        </Container>
    );
}
export default OuterLoading;