import {
  INITIAL_STATE,
  CHARACTERS_LIST_REQUEST,
  CHARACTERS_LIST_SUCCESS,
  CHARACTERS_LIST_NEXT_SUCCESS,
  CHARACTERS_DETAIL_REQUEST,
  CHARACTERS_DETAIL_SUCCESS,
  CHARACTERS_SAVE_REQUEST,
  CHARACTERS_SAVE_SUCCESS
} from '../../../constants/Characters'

export default function character (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTERS_LIST_REQUEST:
      return {
        ...state,
        loading: action.loading
      }

    case CHARACTERS_LIST_SUCCESS:
    case CHARACTERS_LIST_NEXT_SUCCESS:
      const { results, count, limit, offset, total } = action.data

      return {
        ...state,
        results,
        count,
        limit,
        offset,
        total,
        loading: action.loading
      }

    case CHARACTERS_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case CHARACTERS_DETAIL_SUCCESS:
      return {
        ...state,
        results: action.data.results,
        loading: action.loading
      }

    case CHARACTERS_SAVE_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case CHARACTERS_SAVE_SUCCESS:
      return {
        ...state,
        results: action.data.results,
        loading: action.loading
      }

    default:
      return state
  }
}
