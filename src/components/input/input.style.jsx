import styled from "styled-components";

export const InputItem=styled.input`
    display: block;
    margin: 35px auto;
    outline: none;
    border: none;
    font-size: 1.15rem;
    padding:20px 25px;
    border-radius:50px;
    width: 95%;
    max-width: 500px;
    border: 2px solid transparent;
    &:focus{
        border-color: hsl(198.00,100%,50%);
    }
    &[type="submit"]{
        cursor: pointer;
        text-transform:uppercase;
        color: white;
        background-color: hsl(198.00,100%,50%);
        letter-spacing: 5px;
        transition: background-color .25s ease-in-out;
        font-weight: 500;
        &:hover{
            color: hsl(198.00,100%,50%);
            background-color: white;
        }
    }
`;