import { BackgroundPattern,DarkPattern } from "../technologists/background-pattern";
import styled from "styled-components";

export const Container=styled.div`
    ${BackgroundPattern};
    &.dark{
        ${DarkPattern};
    }
    input[type="search"]{
        text-align: center;
        border-color: hsl(198.00,100%,50%);
    }
    select{
        display: block;
        margin: 25px auto 65px;
    }
`;