import { Button as Btn } from "./button.styles";
function Button({children,onClick}){
    return(
        <Btn onClick={onClick}>{children}</Btn>
    );
}
export default Button;