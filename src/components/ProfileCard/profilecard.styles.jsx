import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileLink=styled(Link)`
    all:unset;
    width: 95%;
    max-width:750px;
    margin: 25px auto;
    display: block;
`;

export const ProfileImage=styled.img`
    position: relative;
    width: 115px;
    height: 115px;
    padding: 5px;
    background-color: #50E3C2;
    border-radius: 50%;
    right: 0px;
    object-fit: cover;
`;

export const Half1=styled.div`
    padding: 5px 0;
    display: grid;
    place-items: center;
    position: relative;
    width:17%;
    background-color: #50E3C2;
    
`;
export const Half2=styled.div`
    width:83%;
    box-sizing: border-box;
    padding:15px 15px 15px 44px;
    h2{
        color: #08091f;
        margin-block-end: 10px;
    }
    h5,h2{
        font-weight: 400;
    }
    h5{
        color: #5a5a64;
        margin-block-start: 0;
        margin-block-end: 7px;
        letter-spacing: 1px;
    }
    .skillsContainer{
        display: flex;
        justify-content:flex-start;
        gap: 0 10px;
        align-items:flex-end;
        margin-top: 25px;
        flex-wrap: wrap;
    }
`


export const Container=styled.div`
    overflow: hidden;
    font-size: 18px;
    display: flex;
    width: 100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(247, 244, 244, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 1);
    cursor: pointer;
    ${Half1},${Half2},${ProfileImage}{
        transition: all .5s ease-in-out;
    }
    :hover{
        ${Half1}{
            width: 25%;
            filter: brightness(110%);
        }
        ${Half2}{
            width: 75%;
        }
        ${ProfileImage}{
            right:-65px;
            
        }
    }
    & *{
        pointer-events: none;
    }
    @media screen and (max-width:835px){
        flex-direction: column;
        ${Half1},${Half2}{
            width: 100% !important;
        }
        ${Half2}{
            padding: 0px 25px 15px;
            text-align: center;
            .skillsContainer{
                justify-content: center;
                gap: 5px 15px;
            }
        }
        ${ProfileImage}{
            top:0;
        }
        &:hover{
            ${Half1}{
                width: 100%;
                
            }
            ${Half2}{
                width: 100%;
                padding: 25px 25px 15px;
            }
            ${ProfileImage}{
                right:0;
                top:35px;
            }
        }
    }
`;