import { Container, Voluntech, Shape } from "./Page.styles";
import Link from "../../components/link/link.component";
function Page404(){
    return(
        <Container>
            <Voluntech/>
            <Shape/>
            <Link to="">GO TO HOME PAGE</Link>
        </Container>
    );
}
export default Page404;