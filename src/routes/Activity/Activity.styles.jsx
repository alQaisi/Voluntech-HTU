import styled from "styled-components";

export const Logo=styled.img`
    width: 125px;
    height: 125px;
    object-fit: cover;
    border-radius: 50%;
    outline: 5px solid #50E3C2;
`;
export const Title=styled.h2`
    letter-spacing: 2px;
    color: #4d4a4a;
    line-height: 35px;
    margin: 35px auto;
`;
export const ActivityBreif=styled.p`
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
    /* margin: 25px auto; */
`;
export const IconCont=styled.span`
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    /* width: 150px; */
    gap: 0 15px;
    align-items: center;
    margin: 25px auto;
    svg{
        font-size: 1.25rem;
    }
`;
export const ApplyContainer=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    padding-bottom: 50px;
    z-index: 10;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
    & .datePicker{
        border-radius:25px;
        text-align: center;
        padding: 15px;
        outline: 0;
        border: none;
    }
    & form{
        background-color: #050505a7;
        padding: 65px 25px 25px;
        width:95%;
        max-width: 600px;
        border-radius: 15px;
        margin-top: 100px;
        position: relative;
        gap: 25px 0px;
        /* * input,textarea{
            width: 100%;
        } */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const Container=styled.div`
    position: relative;
    padding: 100px 15px 50px;
    text-align: center;
    margin-top: -100px;
    min-height: 100vh;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2317b585' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");  
    a{
        width: fit-content;
        display: block;
        margin: 50px auto -5px;
        letter-spacing:2px;
        text-transform: uppercase;
    }
    &>button{
        display: block;
        position: absolute;
        left:20px;
        top:25px;
    }
    & .infoContainer{
        width: 95%;
        max-width: 500px;
        margin: 0px auto 25px;
        text-align: center;
        p:last-of-type{
            margin: 35px auto;
            text-transform: uppercase;
            letter-spacing: 3px;
            width: fit-content;
        }
    }
`;
