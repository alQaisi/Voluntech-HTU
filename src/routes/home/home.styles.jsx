import styled from "styled-components";

export const MainHeading=styled.h1`
    color: #08091f;
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 2px;
`;
export const MainText=styled.p`
    margin-top:50px;
    font-size: 1.35rem;
    letter-spacing:1px;
    color:#535785;
    text-align: center; 
    line-height:35px;
`;
export const HomeCont=styled.div`
    padding: 0px 50px 25px;
    @media screen and (max-width:675px) {
        padding: 0px 25px 75px;
        ${MainHeading}{
            font-size: 2rem;
            line-height:45px;
        }
        ${MainText}{
            font-size:1.15rem
        }
    }
    
`;

export const GridItem=styled.div`
    border-radius: 7px;
    cursor: pointer;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    & *{
        pointer-events: none;
    }
    & .itemOverlay{
        transform: translateX(100%);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #00b2fe9d;
        display: flex;
        align-items: flex-end;
        padding-left:15px;
        transition: all .65s ease-in-out;
        h2{
           background-color: white;
           width: 100%;
           padding:10px 0px 10px 35px;
           border-top-left-radius:20px;
           font-weight: 400;
           text-transform: uppercase;
           letter-spacing: 5px;
        }
    }
    &:hover .itemOverlay{
        transform: translateX(0%);
    }
    animation: gridItemAnimation .75s ease-in-out 0s forwards;
    @keyframes gridItemAnimation {
        from {
            transform:scale(0);
        }
        to {
            transform:scale(1);
        }
    }
`;

export const GridMenu=styled.div`
    width:95%;
    max-width: 1200px;
    width: fit-content;
    margin:75px auto 15px;
    display: grid;
    grid-template-columns: 265px 265px 265px 265px;
    grid-template-rows: 250px 250px;
    gap: 15px;
    place-items: center;
    & img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    .mobile,.hardware{
        grid-row: 1/ -1;
    }
    .design{
        grid-column:2/ span 2;
        grid-row: 2;
    }
    .mobile{
        grid-column: 1;
    }
    .data{
        grid-column: 2;
        grid-row: 1;
    }
    .websites{
        grid-column: 3;
        grid-row: 1;
    }
    .hardware{
        grid-column: 4;
    }
    @media screen and (max-width:1215px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 250px 250px 250px 250px;
        .mobile,.hardware{
            grid-row: 1/ 3;
        }
        .design{
            grid-column:1/ -1;
            grid-row: 4;
        }
        .data{
            grid-column: 1;
            grid-row: 3;
        }
        .websites{
            grid-column: 2;
            grid-row: 3;
        }
        .hardware{
            grid-column: 2;
        }
    }
    @media screen and (max-width:675px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 55px 0;
        ${GridItem}{
            width: 100%;
            height:225px;
            border-radius: 0;
        }
    }
`;