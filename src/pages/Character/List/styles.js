import styled from 'styled-components'

export const List = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
list-style: none;
li {
    cursor: pointer;
    display:flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    &:hover {
        box-shadow: 0 1px 4px 1px rgba(255,255,255,.2), 0 2px 2px 0 rgba(255,255,255,.2), 0 3px 1px -2px rgba(255,255,255,.34);
        
        a img {
            opacity: 0.5;
        }
    }
    a {
        text-align: center;
        text-decoration: none;
        img {
            align-self: center;
            max-width: 200px;
            max-height: 200px;
            border-radius: 50%;
        }    
        
        span {
            color: #333;
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
            align-self: center;
        }
    }        
}
`