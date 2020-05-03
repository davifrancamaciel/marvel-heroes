import {
  CHARACTERS_LIST_REQUEST,
  CHARACTERS_LIST_SUCCESS,
  CHARACTERS_LIST_NEXT_REQUEST,
  CHARACTERS_LIST_NEXT_SUCCESS,
  CHARACTERS_DETAIL_REQUEST,
  CHARACTERS_DETAIL_SUCCESS,
  CHARACTERS_SAVE_REQUEST,
  CHARACTERS_SAVE_SUCCESS  
} from '../../../constants/Characters'

export function listCharacterRequest (search, limit) {
  return {
    type: CHARACTERS_LIST_REQUEST,
    search,
    limit,
    loading: true
  }
}

export function listCharacterSuccess (data) {
  return {
    type: CHARACTERS_LIST_SUCCESS,
    data,
    loading: false
  }
}

export function listCharacterNextRequest (search, limit, offset) {
  return {
    type: CHARACTERS_LIST_NEXT_REQUEST,
    search,
    limit,
    offset,
    loading: true
  }
}

export function listCharacterNextSuccess (data) {
  return {
    type: CHARACTERS_LIST_NEXT_SUCCESS,
    data,
    loading: false
  }
}

export function findCharacterRequest (id) {
  return {
    type: CHARACTERS_DETAIL_REQUEST,
    id,
    loading: true
  }
}

export function findCharacterSuccess (data) {
  return {
    type: CHARACTERS_DETAIL_SUCCESS,
    data,
    loading: false
  }
}

export function saveCharacterRequest (character) {
  return {
    type: CHARACTERS_SAVE_REQUEST,
    character,
    loading: true
  }
}

export function saveCharacterSuccess (data) {
  return {
    type: CHARACTERS_SAVE_SUCCESS,
    data,
    loading: false
  }
}
