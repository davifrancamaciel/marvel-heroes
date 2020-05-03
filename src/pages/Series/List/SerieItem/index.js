import React from 'react'
import { SerieItem } from './styles'

export default ({ serie }) => (
  <SerieItem>
    <img src={serie.urlFormated} alt={serie.title}/>
    <div>
      <p>
        <strong>{serie.title}</strong>
      </p>
      <p>
        <strong>Criadores</strong> :{' '}
        {serie.creators.items.map(i => `${i.name}(${i.role})`).join(', ')}
      </p>
      <p>
        <strong>Personagens</strong>:{' '}
        {serie.characters.items.map(i => i.name).join(', ')}
      </p>
    </div>
  </SerieItem>
)
