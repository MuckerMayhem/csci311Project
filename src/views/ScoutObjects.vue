<template>
    <div class="fireballs">
        <div class="container-fluid w-100">
            <h2 class="py-4 text-center">Scouted Objects</h2>

            <b-table id="data-table" class="w-100" hover bordered small responsive="sm" per-page="20"
             thead-class="text-center small"
             tbody-class="small"
             :current-page="current_page" 
             :items="items"
             :fields="fields"
             :sort-by.sync="sort_by"
             :sort-desc.sync="sort_desc"
             sort-icon-left
            ></b-table>
            
            <b-pagination class="justify-content-center" v-model="current_page"
                :total-rows="row_count"
                per-page="20"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
                aria-controls="data-table"
            ></b-pagination>

        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    export default {
        name: 'Fireballs',
        data() {
            return {
                fields: [
                    {key: 'object_id', sortable: true },
                    { key: 'object_designation', sortable: true },
                    { key: 'year_range', sortable: true },
                    { key: 'potential_impacts', sortable: true },
                    { key: 'impact_probability', sortable: true },
                    { key: 'velocity', sortable: true },
                    { key: 'abs_magnitude', sortable: true },
                    { key: 'est_diameter', sortable: true },
                    { key: 'palermo_scale_cum', sortable: true },
                    { key: 'palermo_scale_max', sortable: true },
                ],
                items: [],
                sort_by: 'year_range',
                sort_desc: false,
                row_count: 0,
                row_index: 0,
                per_page: 20,
                current_page: 1,
            }
        },

        mounted() {
            axios.get('/~csci311e/server/sentry.php')
            .then(response => {
                this.fillData(response.data);
            })
            .catch(error => {
                if (error.response) {
                    this.$router.push("/500");            
                }
            })
        },

        methods: {
            fillData(items) {
                var fireballs = Array();
                // var brightness_date;
                items.data.forEach(function (item) {
                    fireballs.push({
                        'object_id': item.object_id,
                        'object_designation': item.object_designation,
                        'year_range': item.year_range,
                        'potential_impacts': item.potential_impacts,
                        'impact_probability': item.impact_probability,
                        'velocity': item.velocity, 
                        'abs_magnitude': item.abs_magnitude,
                        'est_diameter': item.est_diameter,
                        'palermo_scale_cum': item.palermo_scale_cum, 
                        'palermo_scale_max': item.palermo_scale_max
                    })
                });
                this.items = Object.assign([], this.items, fireballs);
                this.row_count = items.data.length;
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
