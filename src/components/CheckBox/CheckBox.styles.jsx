import styled from "styled-components";

export const Checkmark=styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    &::after{
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const CheckBoxCont=styled.label`
    display: inline-block;
    color: #08091f;
    position: relative;
    padding-left: 35px;
    margin: 25px 15px;
    cursor: pointer;
    font-size:1.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    &:hover input ~ ${Checkmark}{
        background-color: #ccc;
    }
    & input:checked ~ ${Checkmark}{
        background-color: #2196F3;
    }
    & input:checked ~ ${Checkmark}::after{
        display: block;
    }
    &.dark{
        color: #ddd;
        & input:checked ~ ${Checkmark}{
            background-color: #784BA0;
        }
        ${Checkmark}{
            outline-color:#784BA0;
        }
    }
`;