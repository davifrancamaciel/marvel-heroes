import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import { SERIES_LIST_REQUEST } from '../../../constants/Series'
import { listSeriesSuccess } from './actions'

function * listSeries ({ characterId }) {
  const response = yield call(api.get, `/characters/${characterId}/series?limit=30`)

  yield put(listSeriesSuccess(response.data.data))
}

export default all([takeLatest(SERIES_LIST_REQUEST, listSeries)])
