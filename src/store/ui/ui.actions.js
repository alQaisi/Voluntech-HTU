import { createAction } from "../../utils/reducer.utils";

export function toggleMenu(previousStatus){
    return createAction("TOGGLE_MENU",!previousStatus);
}

export function toggleColorMode(payload){
    return createAction("TOGGLE_COLOR_MODE",payload);
}