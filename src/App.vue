<template>
  <div id="app">
    <h1 class="title">Dados saúde Recife</h1>
    <SelectLocation @changeLocation="changeLocation"/>
    <Map :markers="locations"/>
  </div>
</template>

<script>
import SelectLocation from '../src/components/SelectLocation'
import Map from '../src/components/Map'
import apiGov from '../src/services/apiGov'

export default {
  name: 'App',
  components: {
    SelectLocation, Map
  },

  data(){
    return{
      locations: [],
    }
  },

  methods:{
    async changeLocation(ev){
      const response = await apiGov.get(`local/${ev}`, {'Content-type': 'application/json'})
      this.locations = response.data.result.records
    }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  padding: 40px;
  background-color: rgb(72, 160, 155);
  
}

.title{
  color: #f1efeffc;
}
</style>
