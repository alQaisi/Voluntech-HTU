import styled,{ css } from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconsStyles=css`
    font-size: 1.25rem;
`
export const TechnologistsIcon=styled(BsFillPeopleFill)`
    ${iconsStyles}
`;
export const CityIcon=styled(FaHome)`
    ${iconsStyles};
`;
export const ManageIcon=styled(MdSettings)`
    position: absolute;
    font-size: 1.5rem;
    right:55px;
    bottom:15px;
    *{
        pointer-events: none;
    }
    :hover{
        opacity:.55;
    }
`;
export const CompanyLogo=styled.img`
    position: absolute;
    width:75px;
    height:75px;
    object-fit:cover;
    border-radius:50%;
    top:-25px;
    left:50%;
    transform: translateX(-50%);
`;
export const Overlay=styled.span`
    position:absolute;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    top:0;
    left:0;
    right:0;
    height:5px;
    transition: height .35s ease-in-out;
    background-color: #50E3C2;
    background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,40%) 0,transparent 59%), radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 55%);
`;
export const InfoSmall=styled.span`
    font-size:.85rem;
    margin: 15px auto;
    color:#5f5f5f;
    letter-spacing: 1px;
    &.withIcon{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:5px;
        font-size:1rem;
    }
`;
export const InfoBig=styled.span`
    font-size: 1.25rem;
    line-height: 30px;
`;

export const Container=styled.div`
    transition: box-shadow .35s ease-in-out;
    border-radius: 9px;
    padding:75px 15px 40px;
    width: 95%;
    max-width:350px;
    margin: 75px auto;
    position: relative;
    background-color: white;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    text-align: center;
    p{
        margin: 25px auto;
    }
    span{
        display:block;
    }
    *{
        pointer-events: none;
    }
    svg{
        margin:0 5px; 
        pointer-events:initial;
    }
    :hover{
        cursor: pointer;
        box-shadow: hsl(162.00,77%,40%) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        ${Overlay}{
            height:12px;
        }
    }
    &.dark{
        background-color: #2d2d2d;
        border: 1px solid #3a3a3a8a;
        box-shadow:unset;
        ${Overlay}{
            background-color: #FF3CAC;
            background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
        }
        ${InfoBig}{
            color: #ddd;
        }
        ${InfoSmall}{
            color:#aaa;
        }
        ${ManageIcon},${ManageIcon}+svg{
            color:#aaa;
            :hover{
                opacity: 1;
                color:#ddd;
            }
        }
    }
`;
export const ActivityLink=styled(Link)`
    all:unset;
    width: 95%;
    max-width:350px;
    margin: 75px auto;
    display: block;
    ${Container}{
        width: 100%;
        max-width: unset;
        margin: unset;
    }
`;
