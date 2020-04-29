import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import * as VueGoogleMaps from "vue2-google-maps"
import VueGeoLocation from "vue-browser-geolocation"
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGeoLocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDe4DCr8GkPWD4lP0M6UILznsmjuzCoQGI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
