import { createContext,useState } from "react";

export const UserMenuContext=createContext({});

export function UserMenuProvider({children}){
    const [menuStatus,setMenuStatus]=useState(false);
    function toggleMenu(){
        setMenuStatus(!menuStatus);
    }
    const value={menuStatus,toggleMenu};
    return(
        <UserMenuContext.Provider value={value}>{children}</UserMenuContext.Provider>
    );
}