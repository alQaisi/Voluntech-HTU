import styled from "styled-components";

export const Container=styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    display:grid;
    place-items: center;
    z-index: 10;
`;

export const Message=styled.div`
    background-color: #ed4337;
    padding: 15px;
    border-radius: 7px;
    color: white;
    width: 95%;
    max-width:500px;
    text-align: center;
    h3{
        line-height: 35px;
        font-weight: 400;
    }
    button{
        font-size:1.3rem;
        padding:5px 20px;
        cursor: pointer;
        background-color: white;
        outline:none;
        border: none;
        border-radius: 7px;
        :hover{
            background-color: black;
            color: white;
        }
    }
`