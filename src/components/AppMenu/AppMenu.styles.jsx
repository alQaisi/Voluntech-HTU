import styled from "styled-components";
import { NavLink as navLink } from "react-router-dom";

export const NavLink=styled(navLink)`
    all:unset;
    margin: 5px 15px;
    color: #535785;
    font-weight: 400;
    font-size:1.15rem;
    position: relative;
    cursor: pointer;
    &:hover{
        color: #08091f;
    }
    &.active{
        font-weight: 500;
        color: #474749;
    }
    &::after{
        content:"";
        display: block;
        position: absolute;
        bottom:-21px;
        width:100%;
        height:6px;
        background-color: #50E3C2;
        background-image: linear-gradient(19deg, #17B486 0%, #00B2FE 100%);
        transform: scale(0);
        transition: transform .5s ease-in-out;
    }
    &.active::after{
        transform: scale(1);
    }
`;
export const Container=styled.div`
    position: absolute;
    bottom:25px;
    left: 50%;
    transform: translateX(-50%);
    width:65%;
    max-width:950px;
    min-height: 55px;
    padding:15px 25px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: position .25s ease-in-out;
    &.ActiveNavLink{
        max-width: unset;
        width: 100%;
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        height:fit-content;
        z-index: 5;
        border-radius: 0;
        background-color: white;
        transform: unset;
        box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
    }
    @media screen and (max-width:815px) {
        transform: unset;
        left: 0;
        right: 0;
        bottom: 0;
        width:100%;
        border-radius: 0;
        padding:15px 15px;
        ${NavLink}{
            font-size:1rem;
            margin: 5px 10px;
        }
    }
    @media screen and (max-width:415px){
        ${NavLink}{
            font-size:.85rem;
            margin: 5px 0px;
        }
    }
`;