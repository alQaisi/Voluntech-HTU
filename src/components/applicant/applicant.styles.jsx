import styled,{ css } from "styled-components";
import { FaUser } from "react-icons/fa";
import { MdLocalActivity, MdDelete } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

const iconStyles=css`
    font-size: 1.15rem;
    margin-right: 5px;
    position: relative;
    top: 2px;
`;

export const UserIcon=styled(FaUser)`
    ${iconStyles};
`;

export const ActivityIcon=styled(MdLocalActivity)`
    ${iconStyles};
    top: 4px;
`;
const staticIconsStyles=css`
    position: absolute;
    font-size: 1.65rem;
    cursor: pointer;
    *{
        pointer-events: none;
    }
    :hover{
        color: #5e5e5e;
    }
`
export const DeleteIcon=styled(MdDelete)`
    ${staticIconsStyles}
    bottom:15px;
    right: 25px;
`;

export const ApproveIcon=styled(BsFillCheckCircleFill)`
    ${staticIconsStyles}
    bottom: 15px;
    left: 15px;
    font-size: 1.45rem;
`;

export const Link=styled.span`
    *{
        pointer-events: none;
    }
    :hover,:hover *{
        cursor: pointer;
        color: #5e5e5e;
    }
`;

export const Avatar=styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #17B486;
    margin: auto;
`;

const elemsStyles=css`
    color: #616161;
    font-size:.85rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    margin: 25px 0;
`;

export const Date=styled.p`
    ${elemsStyles}
`;

export const Status=styled.p`
    ${elemsStyles};
    width: fit-content;
    margin:0px auto;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
`;

export const Title=styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    color: #090922;
    line-height: 35px;
    letter-spacing: 1px;
    margin-block: 0;
`;

export const Notes=styled.p`
    color: #5e5e5e;
    font-size: 1rem;
    line-height: 30px;
    letter-spacing: 1px;
`;

export const ToggleNotes=styled.span`
    color: #090922;
    margin-left: 5px;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        text-decoration: underline;
    }
`;

export const Container=styled.div`
    border-radius: 9px;
    position: relative;
    background-color: white;
    box-shadow: rgb(67 71 85 / 27%) 0px 0px 0.75em, rgb(90 125 188 / 5%) 0px 0.25em 1em;
    width: 95%;
    max-width: 550px;
    padding: 25px 25px 25px;
    margin: 35px auto;
    text-align: left;
    .first-line{
        display: flex;
        align-items: flex-start;
        gap:15px 0;
        max-width: 100%;
        overflow: visible;
        flex-direction: column;
    }
    .second-line{
        margin: 25px auto 15px;
        display: flex;
        justify-content: center;
        gap: 0 25px;
    }
    &.extend{
        padding-bottom: 65px !important;
    }
    &.dark{
        background-color: #303030;
        box-shadow:none;
        border:1px solid #47474789;
        ${Avatar}{
            border-color:#784BA0;
        }
        h3{
            color:#ddd;
        }
        p,span{
            color:#aaa;
        }
        ${Link}{
            color: #aaa;
            &:hover,&:hover *{
                color:#fff;
            }
        }
        ${DeleteIcon},${ApproveIcon}{
            color:#aaa;
            :hover{
                color:#ddd;
            }
        }

    }
`;