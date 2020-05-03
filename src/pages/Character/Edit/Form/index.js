import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { saveCharacterRequest } from '../../../../store/modules/character/actions'

import { Form } from './styles'

export default function CharacterForm ({ selectedCharacter }) {
  const [name, setName] = useState(selectedCharacter.name)
  const [description, setDescription] = useState(selectedCharacter.description)

  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()

  function handleEdit (e) {
    e.preventDefault()
    const updated = {
      ...selectedCharacter,
      name,
      description
    }

    dispatch(saveCharacterRequest(updated))
  }

  return (
    <Form onSubmit={handleEdit}>
      <div className='input-block'>
        <label htmlFor='name'>Nome</label>
        <input
          name='name'
          id='name'
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className='input-block'>
        <label htmlFor='description'>Descrição</label>
        <textarea
          name='description'
          id='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button type='submit'>Salvar</button>
    </Form>
  )
}
