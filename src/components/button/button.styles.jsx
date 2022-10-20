import styled from "styled-components";

export const Button=styled.button`
    border: none;
    outline: none;
    color: #3a3c4b;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 13px;
    border-radius: 25px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #50E3C2;
    background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,40%) 0,transparent 59%), radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 55%);
    border: 1px solid transparent;
    transition: all .25s ease-in-out;
    :hover{
        border-color: hsl(162.00,77%,40%);
        background-color: white;
        background-image: unset;
        color: hsl(162.00,77%,40%);
    }
    &.dark{
        background-color: #784BA0 ;
        background-image: linear-gradient(225deg,#784BA0 50%, #2B86C5 100%);
        color: #ddd;
        :hover{
            background-image: unset;
            background-color:#2a2a2a;
            border-color:#784BA0;
        }
    }
`;