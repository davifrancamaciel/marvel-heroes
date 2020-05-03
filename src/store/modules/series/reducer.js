import {
  INITIAL_STATE,
  SERIES_LIST_REQUEST,
  SERIES_LIST_SUCCESS
} from '../../../constants/Series'

export default function serie (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SERIES_LIST_REQUEST:
      return {
        ...state,
        results: [],
        loading: action.loading
      }
    case SERIES_LIST_SUCCESS:
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

    default:
      return state
  }
}
