import styled from "styled-components";

export const MenuCont=styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    gap:30px 0;
    border-radius:15px;
    width:200px;
    padding:25px 10px;
    position: absolute;
    top:65px;
    right:20px;
    z-index: 5;
    background-color: white;
    &.dark{
        background-color:#2a2a2aeb;
        border:1px solid #dddddd28;
    }
    @media screen and (max-width:535px){
        display: flex;
    }
`;