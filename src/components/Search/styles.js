import styled from 'styled-components';

export const Search = styled.div`
    display:flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

     &:hover {
         opacity: 0.7;
     }

     input {
        width: 100%;
        margin-left: 1ch;
        cursor: text;
        line-height: 2rem;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        color: #e0e0e0;
        -webkit-animation: fadeIn .5s ease;
        animation: fadeIn .5s ease;
    }
    button {
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        margin-left: 10px;
        padding: 0 15px;
        height: 35px;
    }       

`;

