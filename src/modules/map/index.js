import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDe4DCr8GkPWD4lP0M6UILznsmjuzCoQGI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

export { default as services } from './services'
export { default as store } from './store'
export { default as routes } from './routes'