import styled from "styled-components";

export const Skill=styled.p`
    text-align: center;
    width:92px;
    min-width: 90px;
    color: #464545;
    font-size:.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 20px;
    padding: 10px;
    outline: 1px solid transparent;
    background-color: #50E3C2;
    background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,40%) 0,transparent 59%), radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 55%);
    &:hover{
        cursor: pointer;
        color: #0f9276;
        background-image: unset;
        background-color: white;
        outline-color:#21c5a2;
    }
    transition: all .25s ease-in-out;
    &.dark{
        color: #ddd;
        background-color: #FF3CAC;
        background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
        :hover{
            cursor: pointer;
            background-image: unset;
            background-color: #2a2a2a;
            outline-color:#784BA0;
        }
    }
`;