import styled from "styled-components";

export const Container=styled.div`
    min-height:100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 5;
    box-sizing: border-box;
    margin-top: -25px;
    margin-top: -100px;
    position: relative;
    &.dark{
        background-color:#2a2a2a; 
    }
    svg{
        display: block;
        width:90%;
        height: auto;
        max-width:550px;
        margin:125px 0px 0 25px;
    }
`;