import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CharacterList from './pages/Character/List'
import CharacterDetail from './pages/Character/Detail'
import CharacterEdit from './pages/Character/Edit'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={CharacterList} />
      <Route path='/characters/edit/:id' component={CharacterEdit} />
      <Route path='/characters/:id' component={CharacterDetail} />
    </Switch>
  )
}
