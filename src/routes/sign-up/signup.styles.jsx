import styled,{css} from "styled-components";
import { FaUsers,FaUser } from "react-icons/fa"

const IconStyles=css`
    font-size:10rem;
    color: hsl(198.00,100%,50%);
`;

export const UserIcon=styled(FaUser)`
    ${IconStyles}
`;
export const CompanyIcon=styled(FaUsers)`
    ${IconStyles}
`;

export const SignType=styled.div`
    z-index: 1;
    width: fit-content;
    padding:35px 65px 15px;
    text-align: center;
    backdrop-filter: blur(0px) saturate(500%);
    -webkit-backdrop-filter: blur(0) saturate(500%);
    background-color: rgba(255, 255, 255, 0.58);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    cursor: pointer;
    transition: background-color .25s ease-in-out;
    & h1{
        margin-top: 25px;
        color: #04060a;
        font-weight: 400;
    }
    &:hover{
        background-color: #00b3ffdf;
        * {
            color:rgba(255, 255, 255, 0.75);
        }
    }
`;

export const SignUpCont=styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 25px 0;
    min-height: 100vh;
    background-color: #50E3C2;
    background-image: 
        radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
    & .typesCont{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 175px;
        gap: 75px;
        @media screen and (max-width:725px){
            flex-direction: column;
            margin-top:75px;
            padding:0px 0 0px;
            gap:55px;
            height: 100vh;
            justify-content: center;
        }
    }
    &.dark{
        background-color: #784BA0;
        background-image: linear-gradient(225deg, #784BA0 50%, #2B86C5 100%);
        ${SignType}{
            backdrop-filter: blur(0px) saturate(300%);
            -webkit-backdrop-filter: blur(0) saturate(300%);
            background-color: rgba(61, 61, 61, 0.58);
            border-radius: 12px;
            border: 1px solid rgba(133, 133, 133, 0.3);
            h1{
                color: #ddd;
            }
            svg{
                color: #ddd;;
            }
            &:hover{
                background-color: #2a2a2a;
            }
        }
    }
`;