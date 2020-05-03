import { all } from 'redux-saga/effects'

import character from './character/sagas'
import series from './series/sagas'

export default function * rootSaga () {
  return yield all([character, series])
}
