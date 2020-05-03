import { call, put, all, takeLatest } from 'redux-saga/effects'
import {toast} from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'

import {
  CHARACTERS_LIST_REQUEST,
  CHARACTERS_DETAIL_REQUEST,
  CHARACTERS_SAVE_REQUEST,
  CHARACTERS_LIST_NEXT_REQUEST,
  INITIAL_STATE
} from '../../../constants/Characters'
import {
  listCharacterSuccess,
  findCharacterSuccess,
  saveCharacterSuccess
} from './actions'

function * listCharacter ({ search, limit }) {
  const searchQuery = search ? `nameStartsWith=${search}&` : ''

  const response = yield call(
    api.get,
    encodeURI(`/characters?${searchQuery}limit=${limit}`)
  )

  yield put(listCharacterSuccess(response.data.data))

  history.push(`/`)
}

function * listCharacterNext ({ search, limit, offset }) {
  const searchQuery = search ? `nameStartsWith=${search}&` : ''
  const offsetQuery = offset ? `offset=${offset}&` : ''

  const response = yield call(
    api.get,
    encodeURI(`/characters?${searchQuery}limit=${limit}&${offsetQuery}`)
  )
  yield put(listCharacterSuccess(response.data.data))
}

function * findCharacter ({ id }) {
  const response = yield call(api.get, `/characters/${id}`)

  yield put(findCharacterSuccess(response.data.data))
}

function * saveCharacter ({ character }) {
  
  
  const response = {
    ...INITIAL_STATE,
    results: [character]
  }

  yield put(saveCharacterSuccess(response))
  
  toast.success('Personagem salvo com sucesso.')

  history.push(`/characters/${character.id}`)
}

export default all([
  takeLatest(CHARACTERS_LIST_REQUEST, listCharacter),
  takeLatest(CHARACTERS_LIST_NEXT_REQUEST, listCharacterNext),
  takeLatest(CHARACTERS_DETAIL_REQUEST, findCharacter),
  takeLatest(CHARACTERS_SAVE_REQUEST, saveCharacter)
])
