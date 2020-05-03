import React from 'react'

import { MdAutorenew } from 'react-icons/md'

import { Container } from './styles'

//Component
const Loading = props => {
  let _size = !!props && !!props.size ? props.size : 150
  let _color = props && props.color ? props.color : '#e0e0e0'

  return (
    <Container>
      <MdAutorenew size={_size} color={_color} />
    </Container>
  )
}

export default Loading
