import styled from "styled-components";

export const Container=styled.div`
    width: 95%;
    max-width:900px;
    margin: 25px auto;
    display: flex;
    justify-content: center;
    gap: 10px 15px;
    flex-wrap: wrap;
    input + span{
        outline: 1px solid hsl(198.00,100%,50%);
        background-color: white;
    }
`;