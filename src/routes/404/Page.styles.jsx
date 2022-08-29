import { ReactComponent as Logo } from "../../assets/Voluntech.svg";
import { ReactComponent as Page404Shape } from "../../assets/page404.svg";
import styled from "styled-components";

export const Voluntech=styled(Logo)`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width:225px;
`;

export const Shape=styled(Page404Shape)`
    width: 95%;
    max-width:750px;
    height: auto;
`;

export const Container=styled.div`
    background-color: white;
    padding: 75px 15px;
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    a{
        margin-top: 25px;
        font-weight: 500;
        font-size:1.65rem;
    }
`;