import React from 'react'

import CharacterAnalyticsItem from '../CharacterAnalyticsItem'
import { CharacterAnalytics } from './styles'
export default ({ selectedCharacter }) => (
  <CharacterAnalytics>
    <CharacterAnalyticsItem
      name={'Quadrinhos'}
      available={selectedCharacter.comics.available}
    />
    <CharacterAnalyticsItem
      name={'Series'}
      available={selectedCharacter.series.available}
    />
    <CharacterAnalyticsItem
      name={'Histórias'}
      available={selectedCharacter.stories.available}
    />
    <CharacterAnalyticsItem
      name={'Eventos'}
      available={selectedCharacter.events.available}
    />
  </CharacterAnalytics>
)
