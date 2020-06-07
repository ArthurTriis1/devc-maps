<template>
  <select v-model="locationSelected">
        <option v-for="location in locations" :key=location.value :value="location.value">{{location.name}}</option>
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

    methods:{
        order(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        }
    },

    async mounted(){
        const response = await apiGov.get('locals')
        this.locations = response.data.result.records.map(location => {
            return {
                name: location.tipo_unidade.split('|')[1],
                value: location.tipo_unidade
            }}).sort(this.order);
    
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