import styled,{css} from "styled-components";
import {ReactComponent as whiteLoader} from "../../assets/whiteLoader.svg";
import {ReactComponent as loader} from "../../assets/loader.svg";

const loaderStyles=css`
    position: fixed;
    width:90%;
    max-width:300px;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

export const WhiteLoder=styled(whiteLoader)`
    ${loaderStyles}
`;
export const NormalLoader=styled(loader)`
    ${loaderStyles}
`;