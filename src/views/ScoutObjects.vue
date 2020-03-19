<template>
    <div class="scout">
        <div class="container">
            <h2 class="py-4 text-center">CNEOS Scout System Data</h2>
            <!-- For more information on the Scout System see the following: https://cneos.jpl.nasa.gov/scout/intro.html -->
            <!-- <p class="w-75 mx-auto description-text">
                NASA's Scout Data API provides access to near-realtime results from the Centre for Near Earth
                Object Studies (CNEOS) Sout system. Scout provides trajectory analysis and hazard assessment
                for recently detected objects on the Minor Planet Center’s Near-Earth Object Confirmation Page
                (NEOCP). Objects on these pages are unconfirmed; their designations are user-assigned and unofficial.
                These objects could be real asteroids, but they cannot be officially designated until they are
                confirmed by additional observations.
            </p> -->
            <vue-table-dynamic v-bind:class="{cursor: pointer }" :params="params" ref="table" @cell-click="onCellClick"></vue-table-dynamic>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    import VueTableDynamic from 'vue-table-dynamic'

    export default {
        name: 'ScoutObjects',
        components: { VueTableDynamic },
        methods: {
            fillData(resp) {
                var NEOs = Array(['Id', 'Observations', 'NEO', 'NEO > 1km']);
                resp.data.forEach(function (item) {
                    NEOs.push([item.objectName, item.nObs, item.rating, item.neoScore])
                });
                this.params.data = Object.assign([], this.params.data, NEOs);
            },

            onCellClick(rowIndex, columnIndex) {
                if (rowIndex > 0 && columnIndex == 0) {
                    console.log(this.$refs.table.getRowData(rowIndex));
                }
            }
        },
        data() {
            return {
                params: {
                    data: [],
                    header: 'row',
                    border: true,
                    stripe: true,
                    pagination: true,
                    pageSize: 15,
                    sort: [0, 1, 2, 3]
                }
            }
        },
        mounted() {
                axios.get("https://ssd-api.jpl.nasa.gov/scout.api").then(response => (
                    this.fillData(response.data)
                ));
                // axios.post('~csci311e/php/axios.php', {
                //         request: 4
                //     }).then(function (response) {
                //         this.stuff = response;
                //     }).catch(function (error) {
                //     console.log(error);
                // })
        }
    }
</script>

<style scoped>
    .v-table-row:first-child {
        cursor: pointer !important;
    }

    .v-table {
        cursor: pointer !important;
    }

    .scout {
        min-height: 100vh;
        margin-left: 200px;
        padding-top: 5rem;
    }

    .description-text {
        line-height: 1.25;
        text-align: justify;
    }
</style>
