import { Container as container } from '../companies/companies.styles';
import styled from 'styled-components';

export const Container=styled(container)`
    select{
        margin: 25px auto 30px;
    }
    select:last-of-type{
        margin-bottom:100px !important;
    }
    h1.category,span.navigate{
        width: fit-content;
        margin:25px auto;
        display:block;
    }
    h1.category{
        color:#303030;
        letter-spacing:5px;
    }
    span.navigate{
        letter-spacing: 1px;
        color:#5f5f5f;
        font-weight: 500;
        font-size: 1.05rem;
        cursor:pointer;
        &:hover{
            color:#000;
            text-decoration: underline;
        }
    }
    &.dark{
        .category{
            color:#ddd;
        }
        .navigate{
            color:#aaa;
            :hover{
                color:#ddd;
            }
        }
    }
`