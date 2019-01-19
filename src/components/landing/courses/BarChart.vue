<template>
    <canvas ref="myChart" id="myChart"></canvas>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: 'Пробное тестирование (декабрь-январь)',
                            data: [600, 650, 570, 530, 460, 390, 320, 390, 420, 360, 350, 510, 390, 310],
                            borderColor: '#ea5f82',
                            backgroundColor: '#ea5f82',
                            borderWidth: 1,
                        },
                        {
                            label: 'Официальный тест (3 марта)',
                            data: [910, 812, 794, 792, 641, 565, 665, 664, 632, 632, 588, 618, 392, 519],
                            borderColor: '#3da2eb',
                            backgroundColor: '#3da2eb',
                            borderWidth: 1,
                        }]
                },
                options: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Результаты наших учеников (2018 г.)'
                    }
                },
            }
        },
        async mounted() {
            for (let i = 0; i < 14; i++) {
                this.data.labels.push('')
            }
            const ctx = this.$refs.myChart;
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: this.data,
                options: this.options
            });
        }
    }
</script>