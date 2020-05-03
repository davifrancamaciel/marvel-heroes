import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.form`
    margin-top: 30px;
    
    min-width: 500px;
    .input-block+.input-block {
        margin-top: 20px;
    }

    .input-group {
        margin-top: 20px;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
    }

    .input-group .input-block {
        margin-top: 0px;
    }

    .input-block label {
        color: #191919 ;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }

    .input-block input{
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #191919;
        border: 0;
        border-bottom: 1px solid #eee;
    }
    .input-block textarea {
        border: 0;
        color: #191919;
        min-height: 140px;
        height: 60px;
        width: 100%;
        border-bottom: 1px solid #eee;        
        line-height: 18px;
        resize: none;
    }
    button[type=submit] {
        width: 100%;
        border: 0;
        margin-top: 30px;
        background: #F0141E;
        border-radius: 2px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: background 0.5s;
        &:hover {
            background: #b30c14;
        }
    }   
`
