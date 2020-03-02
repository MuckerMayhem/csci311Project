<template>
    <div class="scout">
        <ul class="container m-auto">
            <h2 class="py-4">CNEOS Scout System Data</h2>
            <!-- For more information on the Scout System see the following: https://cneos.jpl.nasa.gov/scout/intro.html -->
            <p class="w-75 mx-auto description-text">
                NASA's Scout Data API provides access to near-realtime results from the Centre for Near Earth
                Object Studies (CNEOS) Sout system. Scout provides trajectory analysis and hazard assessment
                for recently detected objects on the Minor Planet Center’s Near-Earth Object Confirmation Page
                (NEOCP). Objects on these pages are unconfirmed; their designations are user-assigned and unofficial.
                These objects could be real asteroids, but they cannot be officially designated until they are
                confirmed by additional observations.
            </p>
            <!--Accordion wrapper-->
            <!--            <li v-for="(item, index) in info.data" :key="item.objectName">-->
            <!--                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">-->

            <!--                    &lt;!&ndash; Accordion card &ndash;&gt;-->
            <!--                    <div class="card">-->

            <!--                        &lt;!&ndash; Card header &ndash;&gt;-->
            <!--                        <div class="card-header" role="tab" id="headingOne1">-->
            <!--                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1"-->
            <!--                               aria-expanded="true"-->
            <!--                               v-bind:aria-controls="collapseOne + index">-->
            <!--                                <h5 class="mb-0">-->
            <!--                                    {{ item.objectName }} <i class="fas fa-angle-down rotate-icon"></i>-->
            <!--                                </h5>-->
            <!--                            </a>-->
            <!--                        </div>-->

            <!--                        &lt;!&ndash; Card body &ndash;&gt;-->
            <!--                        <div v-bind:id="collapseOne + index" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"-->
            <!--                             data-parent="#accordionEx">-->
            <!--                            <div class="card-body">-->
            <!--                                {{ item.objectName }}-->
            <!--                            </div>-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                    &lt;!&ndash; Accordion card &ndash;&gt;-->
            <!--                </div>-->
            <!--                &lt;!&ndash; Accordion wrapper &ndash;&gt;-->
            <!--            </li>-->
            <VueFaqAccordion
                    :items="formatted_data"
            />
            <h4>Stay Tuned!</h4>
        </ul>

    </div>
</template>


<script>
    import axios from 'axios';
    import VueFaqAccordion from 'vue-faq-accordion'

    export default {
        name: 'ScoutObjects',
        components: {
            VueFaqAccordion
        },
        data() {
            return {
                info: null,
                formatted_data: [],
            }
        },
        mounted() {
            axios.get("https://ssd-api.jpl.nasa.gov/scout.api").then(response => (
                this.info = response.data,
                    this.fillData()
            ))
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
