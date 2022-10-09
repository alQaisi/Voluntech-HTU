import { useReducer, createContext } from "react";

export const UserMenuContext=createContext({});

const INITIAL_STATE={
    menuStatus:false
};

const MenuReducer=function(state=INITIAL_STATE,action){
    const { type, payload }=action;
    switch(type){
        case "TOGGLE_MENU":
            return { ...state,menuStatus:payload }
        default:
            return state;
    }
}

export function UserMenuProvider({children}){
    
    const [ { menuStatus }, dispatch ]=useReducer(MenuReducer,INITIAL_STATE)

    function toggleMenu(previousStatus){
        dispatch({type:"TOGGLE_MENU",payload:!previousStatus});
    }
    const value={ menuStatus, toggleMenu };
    return(
        <UserMenuContext.Provider value={value}>{children}</UserMenuContext.Provider>
    );
}