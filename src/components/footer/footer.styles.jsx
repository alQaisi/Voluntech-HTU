import styled from "styled-components";

export const Container=styled.footer`
    position:absolute;
    bottom: 0;
    width: 100%;
    height:35px;
    background-color: #50E3C2;
    display: grid;
    place-items: center;
    box-sizing: border-box;
    h5{
        font-weight: 400;
        opacity: .75;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin-block: 0;
        font-size: .75rem;
    }
    &.dark{
        background-color:#784BA0;
        h5{
            color: #ddd;
        }
    }
`;
export const Divider=styled.div`
    width: 100%;
    height:35px;
    background-color: transparent;
`;