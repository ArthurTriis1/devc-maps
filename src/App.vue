<template>
  <div id="app">
    <h1>Dados saúde Recife</h1>
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
      const response = await apiGov.get(`datastore_search_sql?sql=SELECT * from "d05f6ffa-304b-4a28-bd03-1ffb26cbf866" where tipo_unidade  like '${ev}'`)
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
  margin-top: 60px;
}
</style>
