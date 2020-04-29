import * as types from './mutations-types'

export default {
  [types.SET_USER_LOCATION] (state, payload){
    state.myLocation = payload
  },
  [types.SET_LOCAL] (state, payload){
    state.local = payload
  }
}