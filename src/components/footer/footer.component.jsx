import { Container, Divider } from "./footer.styles";
import { Fragment } from "react";

function Footer(){
    return(
        <Fragment>
            <Divider/>
            <Container>
                <h5>Copyright &#169; 2022 Voluntech</h5>
            </Container>
        </Fragment>
    );
}
export default Footer;