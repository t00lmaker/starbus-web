<template>
  <div id="app">
    <SimpleLoc/>
  </div>
</template>

<script>
import SimpleLoc from './map/SimpleLoc'
import M from 'materialize-css'


export default {
  name: 'App',
  components: {
    SimpleLoc
  },
  mounted () {
    M.AutoInit()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #039be5;
  margin-top: 0px;
}

body {
  color: #039be5;
  background-color: #f4f4f4 ;
  overflow: hidden; /* Hide scrollbars */
}

</style>
