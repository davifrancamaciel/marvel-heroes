import React from 'react'
import { MdEdit } from 'react-icons/md'
import { CharacterHeaderDetails, LinkEdit } from './styles'

export default ({ selectedCharacter }) => (
  <CharacterHeaderDetails>    
    <img src={selectedCharacter.urlFormated} alt={selectedCharacter.name} />    
    <div>
        <LinkEdit to={`/characters/edit/${selectedCharacter.id}`}>
          <MdEdit size={26} color='#191919' />
        </LinkEdit>
      <h1>{selectedCharacter.name}</h1>
      <p>{selectedCharacter.description}</p>
    </div>
  </CharacterHeaderDetails>
)
