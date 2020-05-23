<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'
export default {
props: {
    markers: Array,
},
data(){
    return{
        map: '',
        baseLayer: '',
        markerLayer: ''
    }
},

watch:{
    markers(newMarkers){
        const layerMarker= newMarkers.map(marker => {
            const popup = `<h2>${marker.nome_oficial}</h2>
                            <h3>Bairro: ${marker.bairro}</h3>
                            <h3>Como usar: ${marker.como_usar}</h3>
                            <h3>Endereço: ${marker.endereço}</h3>
                            <h3>Especialidade: ${marker.especialidade}</h3>
                            <h3>Fone: ${marker.fone}</h3>								
                            <h3>Horario: ${marker.horario}</h3>`

            return L.marker([marker.latitude, marker.longitude]).bindPopup(popup)
        })

        this.map.removeLayer(this.markerLayer);
        this.markerLayer = L.featureGroup(layerMarker).addTo(this.map)
        this.map.fitBounds(this.markerLayer.getBounds())
    }
},


mounted(){
    const configMap = {
        center: [-8.0617507, -34.8728561], 
        zoom: 18,
        maxBounds: [
        [-7.892574,-35.0144856],
        [-8.187249, -34.788964]
        ]
    }

    this.map = L.map("map", configMap);

    this.baseLayer = L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)

    this.markerLayer = L.featureGroup([]).addTo(this.map)

}
}
</script>

<style>
    #map{
        height:  60vh;
        width: 80vh;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 5px 15px 20px;
    }
</style>