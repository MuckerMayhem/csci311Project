<template>
    <div class="about">
        <h2>Learn more about the objects near earth.</h2>
        <h4>
            This project is designed to serve as a user friendly wrapper for
        </h4>
        <div style="width: 100%">
            <table style="width: 100%;">
                <tr>
                    <td>
                        <bar-chart :chart-data="datacollection"/>
                    </td>
                    <td>
                        <line-chart :chart-data="datacollection" :styles="myStyles"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .about {
        min-height: 100vh;
        margin: auto;
    }

    td {
        padding: 50px;
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
