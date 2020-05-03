import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchForm  from '../Search'

import logo from '../../assets/images/logo.png'
import { Container } from './styles'

class Header extends Component {
  render () {
    
    return (
      <Container>
        <Link to='/'>
          <img src={logo} alt='Marvel' />
        </Link>
        <SearchForm />
      </Container>
    )
  }
}

export default Header
