import { Container, Divider } from "./footer.styles";
import { Fragment } from "react";

function Footer({colorMode}){
    return(
        <Fragment>
            <Divider/>
            <Container className={colorMode}>
                <h5>Copyright &#169; 2022 Voluntech</h5>
            </Container>
        </Fragment>
    );
}
export default Footer;