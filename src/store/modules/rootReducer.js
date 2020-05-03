import { combineReducers } from 'redux'

import search from './search/reducer'
import characters from './character/reducer'
import series from './series/reducer'

export default combineReducers({
  search,
  characters,
  series
})
