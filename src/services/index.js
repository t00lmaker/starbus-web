import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './servies'

/* configure vue resource to app */
Vue.use(VueResource)

const http = Vue.http

/* set root url requests */
http.options.root = 'http://localhost:9292'

/* services defined to each modules */
Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

export { http }
export default services