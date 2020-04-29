<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyDe4DCr8GkPWD4lP0M6UILznsmjuzCoQGI"
  >
    <template slot-scope="{ google, map }">
      {{ map }}
      {{ google }}
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'
//import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader,
  },

  computed: {
    mapConfig () {
      return {
        center: { lat: 0, lng: 0 }
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
