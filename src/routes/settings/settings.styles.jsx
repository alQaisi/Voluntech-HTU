import styled from "styled-components";
import {BackgroundPattern} from './background-pattern';

export const Container=styled.div`
    text-align: center;
    margin-top: -100px;
    padding: 25px 15px 50px;
    min-height: 100vh;
    font-size: 18px;
    ${BackgroundPattern};
    color: #090b2e;
    p{
        font-weight: 500;
        color:#535785;
    }
    input,textarea{
        border-color:hsl(198.00,100%,50%);
    }
    input+span{
        outline: 1px solid hsl(198.00,100%,50%);
        background-color: white;
    }
    label{
        margin: 15px;
    }
    &.dark{
        background-color: #2a2a2a;
        p{
            color:#aaa;
        }
        h1,h2{
            color: #ddd;
        }
    }
`