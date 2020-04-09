<template>
    <div class="fireballs">
        <div class="container w-100">
            <h2 class="py-4 text-center">Fireballs</h2>

            <b-table id="data-table" hover bordered small responsive per-page="10" :items="items" @row-clicked="showModal"></b-table>
            <b-pagination class="justify-content-center" v-model="current_page"
                :total-rows="row_count"
                :per-page="per_page"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
                aria-controls="data-table"
                ></b-pagination>

            <!-- Modal for displaying individual Fireball information -->
            <div class="container-fluid">
                <b-modal id="info-modal" ref="info-modal" size="lg" hide-footer>

                    <!-- Map for Fireball displaying fireball coordinates -->
                    <modal-map :coordinates="map.coordinates"/>

                    <!-- Table for Fireball data -->
                    <h5 class="font-weight-bold text-center mt-4">Fireball Observation</h5>
                    <table class="table table-bordered table-striped table-sm my-3">
                        <tbody>
                            <tr>
                                <th scope="row">Peak Brightness Date/Time (UT)</th>
                                <td>{{ infoModal.peak_brightness }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Latitude (degrees)</th>
                                <td>{{ infoModal.latitude }} </td>    
                            </tr>
                            <tr>
                                <th scope="row">Longitude (degrees)</th>
                                <td>{{ infoModal.longitude }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Altitude (km)</th>
                                <td>{{ infoModal.altitude }}</td>
                            <tr>
                                <th scope="row">Velocity (km/s)</th>
                                <td>{{ infoModal.velocity }}</td>
                            </tr>    
                            <tr>
                                <th scope="row">Velocity X Component (km/s)</th>
                                <td>{{ infoModal.velocity_x }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Velocity Y Component (km/s)</th>
                                <td>{{ infoModal.velocity_y }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Velocity Z Component (km/s)</th>
                                <td>{{ infoModal.velocity_z }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total Radiated Energy (J)</th>
                                <td>{{ infoModal.radiated_energy }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Calculated Total Impact Energy (J)</th>
                                <td>{{ infoModal.impact_energy }}</td>
                            </tr>
                        </tbody>
                    </table>                       
                </b-modal>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    import ModalMap from '@/components/ModalMap.vue'
    export default {
        name: 'Fireballs',
        components: {
            ModalMap
        },
        data() {
            return {
                fields: ['peak_brightness', 'latitude', 'longitude', 'altitude',
                            'velocity', 'velocity_x', 'velocity_y', 'velocity_z',
                            'radiated_energy', 'impact_energy'],
                items: [],
                row_count: 0,
                row_index: 0,
                per_page: 10,
                current_page: 1,
                infoModal: {
                    peak_brightness: Date(),
                    latitude: '',
                    longitude: '',
                    altitude: '',
                    velocity: '',
                    velocity_x: '',
                    velocity_y: '',
                    veocity_z: '',
                    radiated_energy: '',
                    impact_energy: ''
                },
                map: {
                    coordinates: [0, 0]
                }
            }
        },

        mounted() {
            axios.post('/~csci311e/server/fireballs.php', {
                row_index: this.row_index
            })
            .then(response => {
                this.fillData(response.data);
            })
            .catch(() => {
                this.$router.push("/500");
            })
        },

        watch: {
            current_page: () => {
                this.getData();
            }
        },

        methods: {
            getData() {
                axios.post('/~csci311e/server/fireballs.php', {
                    row_index: this.row_index*10
                })
                .then(response => {
                    this.fillData(response.data);
                })
                .catch(() => {
                    this.$router.push("/500");
                })
            },

            fillData(items) {
                var fireballs = Array();
                items.data.forEach(function (item) {
                    fireballs.push({
                        'peak_brightness': Date(item.peak_brightness),
                        'latitude': item.latitude,
                        'longitude': item.longitude,
                        'altitude': item.altitude,
                        'velocity': item.velocity,
                        'velocity_x': item.velocity_x, 
                        'velocity_y': item.velocity_y,
                        'velocity_z': item.velocity_z,
                        'radiated_energy': item.radiated_energy, 
                        'impact_energy': item.impact_energy
                    })
                });
                this.items = Object.assign([], this.items, fireballs);
                this.row_count = items.row_count;
            },

            parseLatitude(numString) {
                // Function assumes num has either 'S' for South or 'N' for North
                if (numString.match(/S/g)) {
                    return (-parseFloat(numString));
                }
                return parseFloat(numString);
            },

            parseLongitude(numString) {
                // Function assumes num has either 'W' for West or 'E' for East
                if (numString.match(/W/g)) {
                    return (-parseFloat(numString));
                }
                return parseFloat(numString);
            },

            showModal(record) {
                // Set data table values
                this.infoModal.peak_brightness = record.peak_brightness;
                this.infoModal.latitude = record.latitude;
                this.infoModal.longitude = record.longitude;
                this.infoModal.altitude = record.altitude;
                this.infoModal.velocity = record.velocity;
                this.infoModal.velocity_x = record.velocity_x;
                this.infoModal.velocity_y = record.velocity_y;
                this.infoModal.velocity_z = record.velocity_z;
                this.infoModal.radiated_energy = record.radiated_energy;
                this.infoModal.impact_energy = record.impact_energy;

                // Set Map coordinates
                this.map.coordinates = Array(this.parseLatitude(record.latitude), this.parseLongitude(record.longitude));
                this.$refs['info-modal'].show();
            }
        }
    }
</script>

<style scoped>
    .fireballs {
        min-height: 100vh;
        margin-left: 250px;
        padding-top: 5rem;
    }

    .description-text {
        line-height: 1.25;
        text-align: justify;
    }
</style>
