import * as types from './mutations-types'

export const ActionSetUSERLocation = ({ commit }, payload) => {
  commit(types.SET_USER_LOCATION, payload)
}

export const ActionSetLocal = ({ commit }, payload) => {
  commit(types.SET_LOCAL, payload)
}