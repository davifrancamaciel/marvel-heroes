import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CharacterHeaderDetails = styled.section`
  border-bottom: 1px solid #ddd;
  position: relative;
  padding: 10px 20px;
  display: flex;
  img {
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 20px
}`

export const LinkEdit = styled(Link)`
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;
`