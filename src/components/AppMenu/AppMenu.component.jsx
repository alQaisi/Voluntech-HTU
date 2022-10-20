import { NavLink,Container } from "./AppMenu.styles";
import { useEffect, useRef, } from "react";

function AppMenu({colorMode}){
    const AppMenuRef=useRef(null);
    useEffect(()=>{
        AppMenuRef.current?.classList?.remove("ActiveNavLink");
        function handleScroll(){
            if(window.scrollY>=210){
                return AppMenuRef.current?.classList?.add("ActiveNavLink");
            }
            if(!AppMenuRef.current){
                const ActiveNavLink=document.querySelector(".ActiveNavLink");
                return ActiveNavLink && ActiveNavLink?.classList?.remove("ActiveNavLink");
            }
            AppMenuRef.current.classList.remove("ActiveNavLink");
        }
        window.addEventListener("scroll",handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[]);
    return(
        <Container ref={AppMenuRef} className={colorMode}>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/technologists'>Technologists</NavLink>
            <NavLink to='/activities'>Activities</NavLink>
        </Container>
    );
}
export default AppMenu;