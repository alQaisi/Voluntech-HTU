import styled from "styled-components";

export const Container=styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    z-index: 10;
    box-sizing: border-box;
    padding: 25px 0;
    min-height: 100vh;
    background-color: #50E3C2;
    background-image: 
        radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
    &.normal{
        background-color: #f7f7f7;
        background-image:unset;
        svg:first-of-type path{
        fill: #08091f;
        }
    }
    &.dark{
        background-color: #784BA0 ;
        background-image: linear-gradient(225deg, #801552 0%, #784BA0 50%, #2B86C5 100%);
        
    }
    &.dark,&.dark.normal{
        svg:first-child *{
            stroke:#ddd;
            fill:#ddd;
        }
        svg:last-child *{
            stroke:#ddd;
        }
    }
    &.dark.normal{
        background-image: none;
        background-color:#2a2a2a;
    }
`;
