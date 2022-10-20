import styled from "styled-components";

export const Container=styled.div`
    min-height:100vh;
    display: grid;
    place-items: center;
    z-index: 5;
    box-sizing: border-box;
    margin-top: -100px;
    position: relative;
    &.dark{
        background-color:#2a2a2a;
        svg path{
            stroke:#784BA0;
        }
    }
    svg{
        display: block;
        transform: unset;
        position: absolute;
        top:10%;
        left: 50%;
        transform: translateX(-50%);
    }
`;