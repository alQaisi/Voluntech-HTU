import styled from "styled-components";



export const FormCont=styled.form`
    position: relative;
    z-index: 10;
    z-index: 10;
    width:95%;
    max-width:650px;
    padding:25px 15px;
    margin: 75px auto 50px;
    min-height: 500px;
    backdrop-filter: blur(0px) saturate(500%);
    -webkit-backdrop-filter: blur(0) saturate(500%);
    background-color: rgba(255, 255, 255, 0.58);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    color: #08091f;
    text-align: center;
    h2{
        font-weight:400;
    }
`;

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
    &.dark{
        background-color: #784BA0;
        background-image: linear-gradient(225deg, #784BA0 50%, #2B86C5 100%);
        img{
            background-color: #ddd;
        }
        ${FormCont}{
            backdrop-filter: blur(0px) saturate(300%);
            -webkit-backdrop-filter: blur(0) saturate(300%);
            background-color: rgba(61, 61, 61, 0.58);
            border-radius: 12px;
            border: 1px solid rgba(133, 133, 133, 0.3);
            color: #ddd;
            a{
                color:#ddd;
                ::after{
                    background-color: #FF3CAC;
                    background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
                }
            }
        }
    }
`;