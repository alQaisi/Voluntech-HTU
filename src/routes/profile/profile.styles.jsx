import styled,{css} from "styled-components";
import {BackgroundPattern} from './background-pattern';

export const UserAvatar=styled.img`
    outline: 5px solid #50E3C2;
    border-radius:50%;
    width: 225px;
    height: 225px;
    object-fit: cover;
`;

export const UserType=styled.p`
    background-color:hsl(162.00,77%,40%);
    color: white;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 8px;
    width: fit-content;
    margin: 25px auto;
`;
export const UserName=styled.h1`
    letter-spacing: 2px;
`;
export const UserBreif=styled.p`
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    padding: 12px 20px;
    color: white;
    letter-spacing: 2px;
    line-height:35px;
    background-color: hsl(162.00,77%,40%);
    border-radius: 5px;
    font-weight: 500;
`;
const UserContactItems=css`
    all:unset;
    border: 2px solid hsl(162.00,77%,40%);
    background-color: white;
    color: hsl(162.00,77%,40%);
    border-radius:25px;
    padding: 10px 15px;
    cursor: pointer;
    &:hover{
        background-color: hsl(162.00,77%,40%);
        color: white;
    }
`;
export const Website=styled.a`
    ${UserContactItems}
`;
export const Email=styled.a`
    ${UserContactItems}
`;
export const Container=styled.div`
    position: relative;
    gap: 25px;
    text-align: center;
    margin-top: -100px;
    padding:100px 15px 50px;
    min-height:100vh;
    font-size:1.15rem;
    ${BackgroundPattern};
    & .contactItems{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 15px;
        width:100%;
        margin: 25px auto;
        max-width: 400px;
    }
    & .infoContainer{
        width: 95%;
        max-width: 500px;
        margin: 50px auto;
        text-align: center;
    }
    & .skills{
        margin: 35px auto;
        .skillItems{
            display: flex;
            flex-wrap: wrap;
            justify-content:center;
            gap:5px 10px;
        }
    }
    h4,h5{
        font-size:1rem;
        color: #666565;
        width: fit-content;
        margin:15px auto;
    }
    button{
        display: block;
        position: absolute;
        left:20px;
        top:25px;
    }
    &.dark{
        background-color: #2a2a2a;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23dddddd' fill-opacity='0.06' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        ${UserType},${UserBreif}{
            background-color:#784BA0;
            color:#ddd;
        }
        h1,h3{
            color:#ddd;
        }
        h4,h5{
            color:#aaa;
        }
        ${Website},${Email}{
            background-color: #2a2a2a;
            border-color:#784BA0;
            color: #ddd;
            :hover{
                background-color:#784BA0;
            }
        }
        ${UserAvatar}{
            outline:5px solid #784BA0;
        }
    }
`;