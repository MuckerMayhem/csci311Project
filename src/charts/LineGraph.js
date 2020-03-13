import {Line} from 'vue-chartjs'

export default {
    extends: Line,
    data: () => ({
        chartdata: {
            labels: ['NEO 1412', 'NEO 4412', 'NEO 11', 'NEO 4141'],
            datasets: [
                {
                    label: 'Distance From Earth',
                    backgroundColor: '#f87979',
                    data: [40000, 25000, 15222, 45221]
                }

            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
    }),

    mounted() {
        this.renderChart(this.chartdata, this.options)
    }
}