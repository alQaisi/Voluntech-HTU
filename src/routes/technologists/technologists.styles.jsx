import { BackgroundPattern,DarkPattern } from "./background-pattern";
import styled from "styled-components";

export const Container=styled.div`
    ${BackgroundPattern};
    &.dark{
        ${DarkPattern};
    }
`;