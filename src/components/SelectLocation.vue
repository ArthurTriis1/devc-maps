<template>
  <select v-model="locationSelected">
      <option v-for="location in locations" :key=location :value="location">{{location}}</option>
  </select>
</template>

<script>
import apiGov from '../services/apiGov'

export default {

    data(){
        return {
            locations: [],
            locationSelected: ''
        }
    },

    watch:{
        locationSelected(newLocation){
            this.$emit('changeLocation', newLocation)
        }
    },

    async mounted(){
        const response = await apiGov.get('datastore_search_sql?sql=SELECT distinct tipo_unidade from "d05f6ffa-304b-4a28-bd03-1ffb26cbf866"')
        this.locations = response.data.result.records.map(location => location.tipo_unidade)
    
    }

}
</script>

<style>
select {
        height: 50px;
        border-radius: 10px;
        width: 60vw;
        margin-bottom: 20px;
        font-size: 18px;
    }
</style>