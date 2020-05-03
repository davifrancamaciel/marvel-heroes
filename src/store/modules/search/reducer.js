import { INITIAL_STATE, TEXT_SEARCH_CHANGED } from '../../../constants/Search'

export default function search (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEXT_SEARCH_CHANGED:
      return action.payload
    default:
      return state
  }
}
