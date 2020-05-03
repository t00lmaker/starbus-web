import * as types from './mutations-types'

export default {
  [types.SET_USER_LOCATION] (state, payload){
    state.userLocation = payload
  },
  [types.SET_PLACE] (state, payload){
    state.local = payload
  },
  [types.SET_RED_STOPS] (state, payload) {
    state.redStops = payload
  },
  [types.SET_GREEN_STOPS] (state, payload) {
    state.greenStops = payload
  },
  [types.ADD_RED_STOPS] (state, payload) {
    state.redStops.concat(payload)
  },
  [types.ADD_GREEN_STOPS] (state, payload) {
    state.greenStops.concat(payload)
  }
}