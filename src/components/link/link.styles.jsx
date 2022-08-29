import styled,{ css } from "styled-components";
import { Link as link } from "react-router-dom";
import { NavLink as navLink } from "react-router-dom";

const linkStyles=css`
    all:unset;
    margin: 5px 15px;
    color: #535785;
    font-weight: 400;
    font-size:1.15rem;
    position: relative;
    cursor: pointer;
    &:hover{
        color: #08091f;
        &::after{
            width: 100%;
        }
    }
    &::after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        width: 0;
        height:3px;
        background-color: #08091f;
        background-color: #50E3C2;
        background-image: linear-gradient(19deg, #17B486 0%, #00B2FE 100%);
        bottom:-15px;
        transition: width .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;
export const NavLinkComponent=styled(navLink)`
    ${linkStyles}
    &.active{
        color: #000108;
        ::after{
            width: 100%;
        }
    }
`;
export const LinkComponent=styled(link)`
    ${linkStyles}
`;