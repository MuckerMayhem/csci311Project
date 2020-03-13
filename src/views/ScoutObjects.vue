<template>
    <div class="scout">
        <div class="container m-auto">
            <h2 class="py-4">CNEOS Scout System Data</h2>
            <!-- For more information on the Scout System see the following: https://cneos.jpl.nasa.gov/scout/intro.html -->
            <p class="w-75 mx-auto description-text">
                NASA's Scout Data API provides access to near-realtime results from the Centre for Near Earth
                Object Studies (CNEOS) Sout system. Scout provides trajectory analysis and hazard assessment
                for recently detected objects on the Minor Planet Center’s Near-Earth Object Confirmation Page
                (NEOCP). Objects on these pages are unconfirmed; their designations are user-assigned and unofficial.
                These objects could be real asteroids, but they cannot be officially designated until they are
                confirmed by additional observations.
                {{this.stuff}}
            </p>
            <div class="accordion" id="accordionExample">
                <div v-for="item in info.data" :key="item.objectName">
                    <div class="card">
                        <div class="card-header" :id="'heading' + info.objectName">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse"
                                        :data-target="'#' + item.objectName"
                                        aria-expanded="false" :aria-controls="item.objectName">
                                    {{ item.objectName }}
                                </button>
                            </h2>
                        </div>

                        <div :id="item.objectName" class="collapse show" :aria-labelledby="'heading' + info.objectName"
                             data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">Name:</div>
                                        <div class="col">{{item.objectName}}</div>
                                        <div class="w-100"></div>
                                        <div class="col">Tisserand Score:</div>
                                        <div class="col">{{item.tisserandScore}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--            <VueFaqAccordion-->
            <!--                    :items="formatted_data"-->
            <!--            />-->
            <h4>Stay Tuned!</h4>
        </div>

    </div>
</template>


<script>
    import axios from 'axios';
    //    import VueFaqAccordion from 'vue-faq-accordion'

    export default {
        name: 'ScoutObjects',
        // components: {
        //     VueFaqAccordion
        // },
        data() {
            return {
                info: null,
                formatted_data: [],
                stuff: null
            }
        },
        mounted() {
            axios.get("https://ssd-api.jpl.nasa.gov/scout.api").then(response => (
                this.info = response.data,
                    this.fillData()
            ));
            axios.post('/static/axios.php', {
                request: 4
            })
                .then(function (response) {
                    this.test = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            fillData() {
                const vm = this;
                this.info.data.forEach(function (item) {
                    vm.formatted_data.push({
                        title: item.objectName,
                        value: "Name: " + item.objectName + "\n"
                            + "\nTisserand Score: " + item.tisserandScore,
                        category: 'Tab-1'
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .scout {
        min-height: 100vh;
        margin-left: 200px;
        padding-top: 15rem;
    }

    .description-text {
        line-height: 1.25;
        text-align: justify;
    }
</style>
