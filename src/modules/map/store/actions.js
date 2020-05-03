import * as types from './mutations-types'
import store from '../store'

export const ActionLoadLocation = ( state ) => {
  console.log("#2")
  let coordinates = { // Teresina
    lat: -5.08921,
    lng: -42.8016 
  }

  try{
    coordinates = {
      lat: store.geolocation.lat,
      lng: store.geolocation.lng
    }
  }catch(err){
    console.log(err)
  }
  
  state.dispatch('ActionSetUserLocation', coordinates)
  state.dispatch('ActionSetPlace', coordinates)
}

export const ActionSetUserLocation = ({ commit }, payload) => {
  commit(types.SET_USER_LOCATION, payload)
}

export const ActionSetPlace = ({ commit }, payload) => {
  commit(types.SET_PLACE, payload)
}

export const ActionSetRedStops = ({ commit }, payload) => {
  commit(types.SET_RED_STOPS, payload)
}

export const ActionSetGreenStops = ({ commit }, payload) => {
  commit(types.SET_GREEN_STOPS, payload)
}

export const ActionAddRedStops = ({ commit }, payload) => {
  commit(types.ADD_RED_STOPS, payload)
}

export const ActionAddGreenStops = ({ commit }, payload) => {
  commit(types.ADD_GREEN_STOPS, payload)
}