import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import styled,{ css } from "styled-components";

const Icon=css`
    font-size:2.65rem;
    padding: 3px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #50E3C2;
    background-image: radial-gradient(at 47% 33%,hsl(162.00,77%,40%) 0,transparent 59%),radial-gradient(at 82% 65%,hsl(198.00,100%,50%) 0,transparent 55%);
    :hover{
        filter: brightness(75%);
        polyline{
            stroke: white;
        }
    }
`;

export const Next=styled(GrFormNext)`
    ${Icon};
`;
export const Previous=styled(GrFormPrevious)`
    ${Icon}
`;
export const Container=styled.div`
    margin:55px auto 25px;
    width: 80%;
    max-width:350px;
    display: flex;
    justify-content: space-between;
`;