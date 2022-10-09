import { MenuCont } from "./userMenu.styles";
import { Link } from "../";
import { useRef, useEffect } from "react";

function UserMenu({signOut,menuStatus,toggleMenu}){
    const ref=useRef(null);
    useEffect(()=>{
        function handleClickOutside(evt){
            if (ref.current!==evt.target) {
                setTimeout(() => {
                    toggleMenu(menuStatus); 
                },0);
            }
        }
        function handleResize(evt){
            if(window.innerWidth>535)
                toggleMenu(menuStatus); 
        }
        window.addEventListener("resize",handleResize);
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside);
            window.removeEventListener("resize",handleResize);
        }
        //eslint-disable-next-line
    },[ref]);

    return(
        <MenuCont ref={ref}>
            <Link onClick={signOut} className="navLink" to='/'>Sign Out</Link>
            <Link className="navLink" to='/settings'>Settings</Link>
            <Link className="navLink" to='/dashboard'>Dashboard</Link>
        </MenuCont>
    );
}
export default UserMenu;