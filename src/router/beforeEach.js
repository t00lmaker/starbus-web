import store from '../store'


export default async (to, from, next) => {  
  document.title = 'StarBus ' + to.name
  
  if( to.name != 'login'){
    try{
      await store.dispatch('auth/ActionCheckToken')
    }catch ( err ){
      return next({ name: 'login'})
    }
  } else {
    if (store.getters['auth/hasToken']){
      return next({ name: 'map' })
    }
  }
  next()
}