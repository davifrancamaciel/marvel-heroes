import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    position: relative;
    padding: 30px;
    background: #fff;
    border-radius: 4px;
    width: 100%;
    max-width: 1120px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        border-radius:50%;
    }

`


export const BackLink = styled(Link)`
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
`