import { Container, Nav, NavItem } from "./userDashboard.styles";
import { useState } from "react";
import WorkExperienceCont from "./workExperience.container";
import UserActivities from "./userActivities.component";
function UserDashboard(){
    const [activePage,setActivePage]=useState(["","active"]);
    return(
        <Container>
            <Nav>
                <NavItem className={activePage[0]} onClick={()=>setActivePage(["active",""])}>Activites</NavItem>
                <NavItem className={activePage[1]} onClick={()=>setActivePage(["","active"])}>Work Experience</NavItem>
            </Nav>
            {activePage[0] && <UserActivities/>}
            {activePage[1] && <WorkExperienceCont/>}
        </Container>
    );
}
export default UserDashboard;