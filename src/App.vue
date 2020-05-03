<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'App',
  mounted () {
    M.AutoInit()
  }
}
</script>

<style>

html, body { height: 100%; width: 100%; margin: 0; }

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
