import * as types from './mutations-types'
import Vue from 'vue'

export default {
  [types.SET_USER_LOCATION] (state, payload){
    Vue.set(state, 'userLocation', { ...payload })
  },
  [types.SET_PLACE] (state, payload){
    Vue.set(state,  'place', { ...payload })
  },
  [types.SET_STOPS_USER_LOCATION] (state, payload) {
    Vue.set(state,  'stopsUserLocation', { ...payload })
  },
  [types.SET_STOPS_PLACE] (state, payload) {
    Vue.set(state,  'stopsPlace', { ...payload })
  }
}