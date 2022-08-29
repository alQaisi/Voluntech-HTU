import styled from "styled-components";

export const Container=styled.div`
    min-height:100%;
    display: grid;
    place-items: center;
    z-index: 5;
    box-sizing: border-box;
    margin-top: -25px;
    svg{
        display: block;
        width:90%;
        height: auto;
        max-width:550px;
        margin: 15px 0 25px;
    }
`;