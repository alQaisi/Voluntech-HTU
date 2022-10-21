import { Container, Nav, NavItem } from "./userDashboard.styles";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";
import { Outlet,useLocation } from "react-router-dom";

function UserDashboard(){
    const colorMode=useSelector(selectColorMode);
    const location=useLocation();
    return(
        <Container className={colorMode}>
            <Nav>
                <NavItem to="activities">Activites</NavItem>
                <NavItem className={location.pathname==="/dashboard" && "active"} to="work">Work Experience</NavItem>
            </Nav>
            <Outlet/>
        </Container>
    );
}
export default UserDashboard;