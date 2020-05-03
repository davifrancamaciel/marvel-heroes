// * DEFAULT OBJECTS * \\

export const INITIAL_STATE = {
  loading: false,
  results: [],
  count: 0,
  limit: 0,
  offset: 0,
  total: 0
}

// * ACTION TYPES * \\
export const SERIES_LIST_REQUEST = 'SERIES_LIST_REQUEST'
export const SERIES_LIST_SUCCESS = 'SERIES_LIST_SUCCESS'
export const SERIES_DETAIL_REQUEST = 'SERIES_DETAIL_REQUEST'
export const SERIES_DETAIL_SUCCESS = 'SERIES_DETAIL_SUCCESS'
