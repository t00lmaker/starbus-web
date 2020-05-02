import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

/* configure vue resource to app */
Vue.use(VueResource)

const http = Vue.http

/* set root url requests */
http.options.root = 'http://localhost:9292/v2/'

/* services defined to each modules */
Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
   console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+token)
   http.headers.common['Authorization'] = 'Bearer '+token
}

export { http, setBearerToken }
export default services