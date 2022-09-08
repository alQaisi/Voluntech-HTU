import styled,{ css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const CloseIcon=styled(AiOutlineClose)`
    position: absolute;
    top:7px;
    right: 15px;
    font-size:1.35rem;
    cursor: pointer;
    :hover{
        color: black;
    }
`;


const normalStyles=css`
    background-color: hsl(162.00,77%,40%);
`;


export const Container=styled.div`
    width: 80%;
    max-width:350px;
    padding: 20px 5px 20px;
    text-align: center;
    position: fixed;
    border-radius: 5px;
    background-color: white;
    right: 15px;
    bottom: 50px;
    color: white;
    background-color: #f05555;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    ${props=>props.notificationType!=="delete" && normalStyles}
    p{
        line-height:25px;
    }
`;