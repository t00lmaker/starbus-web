<template>
  <div id="app" v-cloak>
    <h1>Your Loc </h1>
    
    <div v-if="errorStr">
      Sorry, but the following error
      occurred: {{errorStr}}
    </div>
    
    <div v-if="gettingLocation">
      <i>Getting your location...</i>
      
    </div>
    <div classe="row">
      <div class="col s6 m6 l6" v-if="myCoordinates">
        Your location <img ref="http://localhost:8080/marker-stroked-11.svg" style="with: 20px; height: 20px;"/> data is {{ myCoordinates.lat }}, {{ myCoordinates.lng}}
      </div>

      <div class="col s6 m6 l6" v-if="myCoordinates">
        Map Location is {{ mapCoordinates.lat }}, {{ mapCoordinates.lng }}
      </div>

      <div class="row">
        <div class="col s6 m6 l6">
          <gmap-autocomplete class="introInput" @place_changed="changePlace" >
            <template v-slot:input="slotProps">
                <v-text-field outlined
                              prepend-inner-icon="place"
                              placeholder="Location Of Event"
                              ref="input"
                              v-on:listeners="slotProps.listeners"
                              v-on:attrs="slotProps.attrs">
                </v-text-field>
            </template>
          </gmap-autocomplete>
        </div>
      </div>
    </div>

    

    <div class="row">
      <div class="col s12 m12 l8 push-l2">
        <GmapMap
          :center="center"
          :zoom="18"
          style="width: 100%; height: 600px; margin: 5% auto"
          ref="mapRef"
          @click="clickMap"
          @dragend="dragMap"
        >
          <span class="map-icon map-icon-archery">
            <GmapMarker
              :position= myCoordinates
              :clickable="true"
              icon="mylocation.svg"
              :draggable="true"
              @dragend="dragMarker"
            />
          </span>
           <GmapMarker
            :position= mapCoordinates
            :clickable="true"
            :draggable="true"
            icon="place.svg"
            @dragend="dragMarker"
          />
         </GmapMap>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  data(){ 
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      center: {
         lat: -5.08921,
        lng: -42.8016
      },
      gettingLocation: true,
      errorStr: null
    }
  },
  mounted(){
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  created() {
    this.$getLocation({})
      .then( coordinates => {
          this.center = coordinates;
          this.myCoordinates = coordinates;
          this.gettingLocation = false;
      })
      .catch( error => {
        console.log(error)
        this.errorStr = error.message;
        this.myCoordinates = { // Teresina
          lat: -5.08921,
          lng: -42.8016
        }
      })
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