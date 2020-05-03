<template>
  <div class="map-comp">
    <GmapMap
    :center="center"
    :zoom="18"
    ref="mapRef"
    @click="clickMap"
    @dragend="dragMap"
  >
    <span class="map-icon map-icon-archery">
      <GmapMarker
        :position= mapCoordinates
        :clickable="true"
        :draggable="true"
        icon="icons/place.png"
        @dragend="dragMarker"
      />
      
      <GmapMarker
        :position= userLocation
        :clickable="true"
        icon="icons/user_location.png"
        :draggable="true"
        @dragend="dragMarker"
      />
       
       <GmapMarker
        :key="i"
        v-for="(stopGreen, i) in stopsGreen"
        :position= stopGreen.coordinates
        :clickable="true"
        icon="icons/stop_green.png"
        :draggable="false"
        @dragend="dragMarker"
      />

      <GmapMarker
       :key="i+5"
        v-for="(stopRed, i) in stopsRed"
        :position= stopRed.coordinates
        :clickable="true"
        icon="icons/stop_red.png"
        :draggable="false"
        @dragend="dragMarker"
      />

    </span>
    </GmapMap>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){ 
    return {
      indexStopG: 0,
      indexStopR: 0,
      map: null,
      center: {
        lat: -5.08921,
        lng: -42.8016
      },
      stopsRed : [
        { 
          name: 'stop1',
          coordinates: {
            lat: -5.08821,
            lng: -42.8056
          }
        },
        {
          name: 'stop2',
          coordinates: {
            lat: -5.08701,
            lng: -42.8026
          }
        },
      ], 
      stopsGreen: [
        { 
          name: 'stop3',
          coordinates: {
            lat: -5.08621,
            lng: -42.8026
          }
        },
        {
          name: 'stop4',
          coordinates: {
            lat: -5.08921,
            lng: -42.8036
          }
        },
      ],
      gettingLocation: true,
      errorStr: null
    }
  },
  mounted(){
    this.$store.dispatch('map/ActionLoadLocation')
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  created() {
    console.log("#0")
  },
  methods: {
    clickMap (e) {
      console.log(e.latLng.lat())
      console.log(e.latLng.lng())
    },

    dragMap () {
      console.log(this.map.getCenter().lat())
      console.log(this.map.getCenter().lng())
    }, 

    dragMarker (e) {
      console.log(e.latLng.lat())
      console.log(e.latLng.lng())
    },
    changePlace(e){
      this.center = { 
          lat: e.geometry.location.lat(), 
          lng: e.geometry.location.lng()
      };
      console.log(e.geometry.location.lat())
      console.log(e.geometry.location.lng())
    }
  },
  computed: {
    ...mapState('map', ['userLocation']),
    mapCoordinates() { 
      if(this.map) {
        return {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng()
        }
      }
      return this.myCoordinates
    }
  }
}
</script>

<style>
.map-comp .vue-map-container { 
  height: 100vh; 
  width:100%;
  margin: 0% auto;
}

</style>