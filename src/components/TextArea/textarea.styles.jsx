import styled from "styled-components";

export const Textarea=styled.textarea`
    width: 95%;
    max-width:500px;
    height:250px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    outline: none;
    resize: none;
    &:focus{
        border-color: hsl(198.00,100%,50%);
    }
    &.dark{
        background-color: #303030;
        color: #ddd;
        border-color:#784BA0 !important;
    }
`