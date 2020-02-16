<template>
  <div class="about">
    <h2 class="py-4">Learn a little bit more about the information NASA puts out every single day.</h2>
    <p class="w-50 mx-auto">
      This project is designed to serve as a user friendly wrapper for a few of NASA's many
      and verbose data resources. NASAnalysis is being developed as part of the Introduction to 
      Web Development course offered by the Computing Science Department at Vancouver Island University.
    </p>
  </div>
</template>


<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 15rem;
  margin: auto;
}
</style>
<script>
    import BarChart from '../charts/BarGraph.js'
    import LineChart from '../charts/LineGraph'

    export default {
        components: {
            BarChart,
            LineChart
        },
        data() {
            return {
                height: 10,
                datacollection: null
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: [this.getRandomInt(), this.getRandomInt()],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#187FFF',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }, {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                }
            },
            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        computed: {
            myStyles() {
                return {
                    height: '${this.height}px',
                    position: 'relative'
                }
            }
        }
    }
</script>
