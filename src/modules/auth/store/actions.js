import services from '@/services'
import * as types from './mutations-types'
import { setBearerToken } from '@/services'
import * as storage from '../storage'  

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then( res => {
    console.log(res.data)
    dispatch('ActionSetUser', res.data.user)
    dispatch('ActionSetToken', res.data.token)
    dispatch('ActionSetApp', res.data.application)
  })
}

export const ActionSetUser = ({ commit }, user) => {
  commit(types.SET_USER, user)
}

export const ActionSetToken = ({ commit }, token) => {
  setBearerToken(token)
  storage.setLocalToken(token)
  commit(types.SET_TOKEN, token)
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if(state.token){
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if(!token){
    return Promise.reject(new Error('Invalid token'))
  }
  
  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  setBearerToken('')
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}

export const ActionLoadSession = ({ dispatch }) => {
  (async function () {  
    try{
      console.log('#99')
      const { data : { app, user } } = await services.auth.session()
      console.log('#100')
      dispatch('ActionSetUser', user)
      dispatch('ActionSetApp', app)
    
    }catch (err) {
      console.log('#101')
      dispatch('ActionSignOut')
    }
  })()
}

export const ActionSetApp = ({ commit }, app) => {
  commit(types.SET_APP, app)
}