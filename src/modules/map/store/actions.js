import services from '@/services'
import * as types from './mutations-types'

export const ActionLoadLocation = async ( { dispatch }) => {
  await navigator.geolocation.getCurrentPosition(pos => {

    const params = {
      action: 'ActionSetStopsUserLocation',
      coordinates: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
    }
  
    dispatch('ActionSetUserLocation', params.coordinates)
    dispatch('ActionSetPlace', params.coordinates)
    dispatch('ActionLoadCloseStops', params)
  }, err => {
    console.log(err)

    const params = {
      action: 'ActionSetStopsUserLocation',
      coordinates: { // Teresina
        lat: -5.08921,
        lng: -42.8016 
      }
    } 

    dispatch('ActionSetUserLocation', params.coordinates)
    dispatch('ActionSetPlace', params.coordinates)
    dispatch('ActionLoadCloseStops', params)
  })
}

export const ActionLoadCloseStops = async ({ dispatch }, params) => {
  let stops = []
  await services.map.stopsClose({ ... params.coordinates, dist: 500 }).then( res => {
    stops = res.data.stops

    stops = stops.map((stop) => {
      stop.coordinates = { 
        lat: parseFloat(stop.lat),
        lng: parseFloat(stop.lng)
      }
      return stop
    })
    console.log(">>>>>>> 0")
  })
  dispatch(params.action, stops)
}

export const ActionSegregationStop = ( context ) => {
  const userStops = context.state.stopsUserLocation
  const placeStops = context.state.stopsPlace

  console.log(context)

  console.log(userStops)

  console.log(placeStops)
}
export const ActionSetUserLocation = ({ commit }, payload) => {
  commit(types.SET_USER_LOCATION, payload)
}

export const ActionSetPlace = ({ commit }, payload) => {
  commit(types.SET_PLACE, payload)
}

export const ActionSetStopsUserLocation = ({ commit }, payload) => {
  console.log(">>>>>>> 1")
  commit(types.SET_STOPS_USER_LOCATION, payload)
}

export const ActionSetStopsPlace = ({ commit }, payload) => {
  console.log(">>>>>>> 1")
  commit(types.SET_STOPS_PLACE, payload)
}