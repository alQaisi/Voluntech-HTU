import { Container, Nav, NavItem } from "./userDashboard.styles";
import { useState } from "react";
import WorkExperienceCont from "./workExperience.container";
import UserActivities from "./userActivities.component";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../store/ui/ui.selectors";
function UserDashboard(){
    const [activePage,setActivePage]=useState(["","active"]);
    const colorMode=useSelector(selectColorMode);
    return(
        <Container className={colorMode}>
            <Nav>
                <NavItem className={activePage[0]} onClick={()=>setActivePage(["active",""])}>Activites</NavItem>
                <NavItem className={activePage[1]} onClick={()=>setActivePage(["","active"])}>Work Experience</NavItem>
            </Nav>
            {activePage[0] && <UserActivities colorMode={colorMode}/>}
            {activePage[1] && <WorkExperienceCont colorMode={colorMode} />}
        </Container>
    );
}
export default UserDashboard;