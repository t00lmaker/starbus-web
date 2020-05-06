import * as types from './mutations-types'

export const ActionLoadLocation = ( { dispatch }) => {
  navigator.geolocation.getCurrentPosition(pos => {

    const coordinates = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    }
  
    dispatch('ActionSetUserLocation', coordinates)
    dispatch('ActionSetPlace', coordinates)
  }, err => {
    console.log(err)
    
    const coordinates = { // Teresina
      lat: -5.08921,
      lng: -42.8016 
    }
    
    dispatch('ActionSetUserLocation', coordinates)
    dispatch('ActionSetPlace', coordinates)
  })
}

export const ActionLoadCloseStops = ({ dispatch }) => {
  
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