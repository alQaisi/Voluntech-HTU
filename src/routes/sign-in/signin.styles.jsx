import styled from "styled-components";

export const Container=styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 25px 0;
    min-height: 100vh;
    background-color: #50E3C2;
    background-image: 
        radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
        radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
`;

export const FormCont=styled.form`
    position: relative;
    z-index: 1;
    width:95%;
    max-width:560px;
    padding:25px 15px 35px;
    margin: 125px auto 50px;
    backdrop-filter: blur(0px) saturate(500%);
    -webkit-backdrop-filter: blur(0) saturate(500%);
    background-color: rgba(255, 255, 255, 0.58);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    color: #08091f;
    text-align: center;
    h2{
        font-weight:400;
        margin-bottom: 50px;
    }
    input[type="submit"]{
        margin:65px auto 45px;
    }
    @media screen and (max-width:430px){
        & a{
            display:block;
            width: fit-content;
            margin: auto;
        }
        & a:last-of-type{
            margin-top:35px;
        }
    }
`;