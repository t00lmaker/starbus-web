import Vue from 'vue'
import VueResource from 'vue-resource'

/* configure vue resource to app */
Vue.use(VueResource)

const http = Vue.http

/* set root url requests */
http.options.root = 'http://localhost:9292'

export { http }