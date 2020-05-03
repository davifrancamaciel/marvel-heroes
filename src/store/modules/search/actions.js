import { TEXT_SEARCH_CHANGED } from '../../../constants/Search'

export function changeSearchText (value) {
  return {
    type: TEXT_SEARCH_CHANGED,
    payload: value
  }
}
