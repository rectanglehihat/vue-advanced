<template>
  <div>
    <canvas ref="lineChart" id="lineChart"></canvas>
  </div>
</template>

<script>
  export default {
    mounted() {
      const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      };

      const config = {
        type: 'line',
        data: data,
        options: {},
      };
      console.log(config);

      // const myChart = new Chart(document.getElementById('lineChart'), config);
      const myChart = new this.$_Chart(this.$refs.lineChart, config);
      console.log(myChart);
    },
  };
</script>

<style></style>
