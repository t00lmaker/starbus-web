<template>
  
  <div class="map-comp">
    <GmapMap
      :center= center
      :zoom="18"
      ref="mapRef"
      @click="clickMap"
      @dragend="dragMap"
    >
      <span class="map-icon map-icon-archery">
        <GmapMarker
          :position= place
          :clickable="true"
          :draggable="true"
          icon="icons/place.png"
          @dragend="dragPlace"
        />
        
        <GmapMarker
          :position= userLocation
          :clickable="true"
          icon="icons/user_location.png"
          :draggable="true"
          @dragend="dragUser"
        />
        
        <GmapMarker
          :key="stopUser.code"
          v-for="stopUser in stopsUserLocation"
          :position= stopUser.coordinates
          :clickable="true"
          icon="icons/stop_green.png"
          :draggable="false"
        />

        <GmapMarker
        :key="stopPlace.code"
          v-for="stopPlace in stopsPlace"
          :position= stopPlace.coordinates
          :clickable="true"
          icon="icons/stop_red.png"
          :draggable="false"
        />

      </span>
    </GmapMap>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data(){ 
    return {
      map: null,
      center: {
        lat: -5.08921,
        lng: -42.8016
      }
    }
  },
  mounted(){
    this.ActionLoadLocation()
    this.ActionLoadCloseStops({
      action: 'ActionSetStopsUserLocation',
      coordinates: { // Teresina
        lat: -5.08921,
        lng: -42.8016 
      } 
    })
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
    ...mapActions('map', [
      'ActionLoadLocation',
      'ActionLoadCloseStops',
      'ActionSegregationStop'
    ]),
    clickMap (e) {
      console.log(e.latLng.lat())
      console.log(e.latLng.lng())
    },

    dragMap () {
      console.log(this.map.getCenter().lat())
      console.log(this.map.getCenter().lng())
    }, 
    dragUser (e) {
      this.ActionLoadCloseStops({
        action: 'ActionSetStopsUserLocation',
        coordinates: {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      })
    },
    dragPlace (e){
      this.ActionLoadCloseStops({
        action: 'ActionSetStopsPlace',
        coordinates: {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      })
    }
  },
  computed: {
    mapCoordinates() { 
      if(this.map) {
        return {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng()
        }
      }
      return this.userLocation
    },
    ...mapState(
      'map', [
        'userLocation', 
        'stopsPlace',
        'stopsUserLocation',
        'place'
      ]
    ),
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