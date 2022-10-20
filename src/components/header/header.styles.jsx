import styled,{css} from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/Voluntech.svg";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineClose,MdLightMode,MdOutlineDarkMode } from "react-icons/md";

const darkModeGradient=css`
    background-color: #784BA0 ;
    background-image: linear-gradient(225deg,#784BA0 50%, #2B86C5 100%);
`;

const menuIconStyles=css`
    margin:0 0px 0 25px;
    font-size:1.75rem;
    cursor: pointer;
    &:hover{
        opacity:.60;
    }
    display: none;
`;
export const MenuIcon=styled(GiHamburgerMenu)`
    ${menuIconStyles}
`;
export const CloseMenuIcon=styled(MdOutlineClose)`
    ${menuIconStyles}
`;
const colorModeStyles=css`
    margin:0 0px 0 15px;
    font-size:1.5rem;
    cursor:pointer;
`;
export const LightModeIcon=styled(MdOutlineDarkMode)`
    fill:#2a2a2a;
    ${colorModeStyles}
`;
export const DarkModeIcon=styled(MdLightMode)`
    fill:#ddd;
    ${colorModeStyles}
`;
export const Hero=styled.div`
    width: 100%;
    height:200px;
    position: relative;
    margin-bottom:100px;
    background-color: #50E3C2;
    background-image: 
        radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
    &.dark{
        ${darkModeGradient}
    }
`;
export const Logo=styled(LogoImg)`
    width:135px;
    height:auto;
    min-height:35px;
    cursor: pointer;
`;
export const ProfileTitle=styled.span`
    position: absolute;
    top:80px;
    right:75px;
    background: rgba(0,0,0,.1);
    padding: 8px 13px;
    border-radius: 25px;
    border: 2px solid white;
    color: #ffffff;
    z-index: 3;
    pointer-events: none;
    opacity:0;
    transition: opacity .15s ease-in-out;
`;
export const Avatar=styled.img`
    width:40px;
    height:40px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 15px;
    cursor: pointer;
    outline: 2px solid #17B486;
    :hover + ${ProfileTitle}{
        opacity: 1;
    }
`;
export const UserNav=styled.div`
    display: flex;
    align-items:center;
    @media screen and (max-width:535px){
        &>a{
            display: none;
        }   
        &>${MenuIcon},&>${CloseMenuIcon}{
            display: initial;
        }
        ${Avatar}{
            width:35px;
            height:35px;
        }     
        ${ProfileTitle}{
            top:65px !important;
            right:70px !important;
        }
    }
`;
export const AppBar=styled.div`
    padding:15px 100px;
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom: 2px solid rgb(194 194 194 / 50%);
    &.dark{
        background-color: #2a2a2a;
        border-bottom:2px solid rgb(0 0 0 / 25%) ;
        ${Logo} *{
            fill: #ddd;
            stroke:#ddd;
        }
        ${Avatar}{
            outline-color: #784BA0;
        }
        a{
            color: #ddd;
            ::after{
                ${darkModeGradient};
            }
        }
        ${MenuIcon},${CloseMenuIcon}{
            fill:#ddd;
        }
    }
    @media screen and (max-width:815px) {
        padding:10px 25px;
        a{
        font-size: 1rem;
        margin: 0 7px;
        }
        ${ProfileTitle}{
            top:75px;
            right:25px;
            font-size:.75rem;
        }
    }
`;

