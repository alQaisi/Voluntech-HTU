import company from "../../assets/company.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryAvatar=styled.img`
    width: 125px;
    height: 125px;
    object-fit: cover;
    position: relative;
    border-radius: 50%;
    top:35px;
    transition: all .35s ease-in-out;
`;

export const CardHeader=styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height:185px;
    width: 100%;
    background-color: #50E3C2;
    background-image:url(${company});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    & .overlay{
        transition: all .4s ease-in-out;
        filter: grayscale(0%);
        position: absolute;
        opacity:.45;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #50E3C2;
        background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,40%) 0,transparent 59%), radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 55%);
    }
`;

export const Info=styled.div`
    box-sizing: border-box;
    padding: 50px 15px 15px;
    text-align: center;
    *{
        color:#08091f;
    }
    h2{
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 35px;
    }
    h5{
        font-weight: 400;
        letter-spacing: 1px;
        margin-block: 15px;
        color: #706f6f;
    }
    p{
        margin: 25px auto 15px;
        min-width: 115px !important;
    }
`;

export const CardLink=styled(Link)`
    all:unset;
    max-width:500px;
    width:95%;
    display: block;
    margin: 25px auto;
`;

export const Container=styled.div`
    overflow: hidden;
    width:100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(247, 244, 244, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 1);
    cursor: pointer;
    :hover{
        border-color: hsl(198.00,100%,50%);
        ${CardHeader}{
            .overlay{
                filter: grayscale(100%);
            }
            ${CountryAvatar}{
                width: 175px;
                height: 175px;
                top:55px;
            }
        }
    }
    *{
        pointer-events: none;
    }
    &.dark{
        background-color: #2d2d2d;
        border: 1px solid #3a3a3a8a;
        ${CardHeader}{
            & .overlay{
                background-color: #7400da;
                background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,20%) 0,transparent 50%), radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 75%);
            }
        }
        ${Info}{
            h2{
                color: #ddd;
            }
            h5{
                color:#aaa;
            }
        }
    }
`;
