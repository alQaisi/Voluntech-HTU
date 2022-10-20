import styled from "styled-components";

export const Container=styled.div`
    width:250px;
    margin: 50px auto;
    img{
        display: block;
        width:175px;
        height: 175px;
        margin:35px auto;
        object-fit: cover;
        border-radius: 50%;
    }
    & img.big{
        width:225px;
        height: 225px;
        outline: 5px solid #17B486;
        border-radius: 50%;
    }
    input{
        display: none;
    }
    label {
        background-color: #2a91f1;
        color: white;
        padding: 10px 15px;
        font-size: 1.25rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
    &.dark{
        label{
            background-color:#784BA0;
            color: #ddd;
        }
        & img.big{
            outline-color:#784BA0;
        }
    }
`