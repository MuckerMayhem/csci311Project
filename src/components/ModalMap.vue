<template>
    <l-map
      style="height: 400px; width: 100%;"
      :center="getLatLng(coordinates[0], coordinates[1])"
      :zoom="zoom"
    >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-circle-marker :lat-lng="getLatLng(coordinates[0], coordinates[1])" :radius="radius" :color="color"/>
    </l-map>
</template>

<script>
import { latLng } from "leaflet"
    import {LMap, LTileLayer, LCircleMarker} from 'vue2-leaflet'

    export default {
        name: 'ObjectModal',
        components: {
            LMap,
            LTileLayer,
            LCircleMarker
        },
        props: {
            coordinates: Array
        },
        data() {
            return {
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=546b417b45a6499382d417ff91b8f364',
                zoom: 4,
                bounds: null,
                radius: 5,
                color: 'blue'
            }
        },
        methods: {
            getLatLng(latitude, longitude) {
                return latLng(latitude, longitude);
            }
        }
    }
</script>