import store from '../store'


export default async (to, from, next) => {
  
  document.title = 'StarBus ' + to.name
  console.log(from.name, '>>>', to.name)
  
  if( to.name != 'login'){
    try{
      console.log('#1')
      await store.dispatch('auth/ActionCheckToken')
    }catch ( err ){
      console.log('#2')
      console.log(err)
      return next({ name: 'login'})
    }
  } else {
    console.log('>>', store.getters['auth/hasToken'])
    if (store.getters['auth/hasToken']){
      console.log('#3')
      return next({ name: 'map' })
    }
  }
  next()
}