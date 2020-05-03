import {
  SERIES_LIST_REQUEST,
  SERIES_LIST_SUCCESS
} from '../../../constants/Series'

export function listSeriesRequest (characterId) {
  return {
    type: SERIES_LIST_REQUEST,
    characterId,
    loading: true
  }
}

export function listSeriesSuccess (data) {
  return {
    type: SERIES_LIST_SUCCESS,
    data,
    loading: false
  }
}
