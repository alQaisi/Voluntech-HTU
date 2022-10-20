import styled,{css} from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Background=css`
    margin-top:-110px;
    padding: 25px 15px;
    min-height: 100vh;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2317b585' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2317b585' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

const DarkBackground=css`
    background-color: #2a2a2a;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dddddd' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`;

export const NavItem=styled.span`
    font-size:1.15rem;
    color: #8f8e8e;
    &.active,&:hover{
        cursor: pointer;
        color: #090922;
    }
`;

export const Nav=styled.div`
    border-radius: 50px;
    display: flex;
    justify-content:space-around;
    width:95%;
    max-width: 550px;
    background-color: white;
    margin: 15px auto 65px;
    padding: 20px 15px; 
    box-shadow: #50E3C2 0px 0px 0px 2px;
`;

export const AddWorkCont=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    padding-bottom: 50px;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & .datePicker{
        border-radius:25px;
        text-align: center;
        padding: 15px;
        outline: 0;
        border: none;
    }
    & form{
        background-color: #050505a7;
        padding: 30px 25px 25px;
        width:95%;
        max-width: 600px;
        border-radius: 15px;
        margin-top: 100px;
        position: relative;
    }
    &.dark{
        background-color: #4b4b4b58;
        & form{
            background-color: #2a2a2a;
        }
    }
`;

export const CloseIcon=styled(AiOutlineClose)`
    font-size: 1.5rem;
    color: white;
    position: absolute;
    right:15px;
    top: 15px;
    :hover{
        opacity:.5;
        cursor: pointer;
    }
`;

export const Container=styled.div`
    ${Background};
    &.dark{
        ${DarkBackground}
        ${Nav}{
            background-color:#2a2a2a;
            box-shadow: #784BA0 0px 0px 0px 2px;
        }
        ${NavItem}{
            color:#aaa;
            &.active,&:hover{
                color: #eee;
            }
        }
    }
    text-align: center;
`;