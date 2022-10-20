import { Button as Btn } from "./button.styles";
function Button({children,colorMode,onClick}){
    return(
        <Btn className={colorMode} onClick={onClick}>{children}</Btn>
    );
}
export default Button;