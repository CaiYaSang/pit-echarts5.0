<template>
  <div>
    <div class="boxPlot" ref="boxPlot"></div>
  </div>
</template>
<script>
export default {
  name: 'Pie-',
  data(){
    return {
      data0: [
        [655, 850, 940, 980, 1175],
        [672.5, 800, 845, 885, 1012.5],
        [780, 840, 855, 880, 940],
        [621.25, 767.5, 815, 865, 1011.25],
      ],
    }
  },
  mounted() {
    let boxPlotCharts = this.$echarts.init(this.$refs.boxPlot)

    boxPlotCharts.setOption({
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'category0',
          type: 'boxplot',
          datasetIndex: 3,
          data: this.data0, //此处为盒须图数据
        },
        {
          color: 'blue',
          barGap: '33.33333333333333%',
          name: 1,
          symbolPosition: 'end',
          symbolSize: 8,
          type: 'pictorialBar',
          z: 10000,
          data: [10, 22, 33, 55], //盒须图对应需要标点的值数据
          tooltip: {
            show: false,
          },
        },
        {
          name: 'category1',
          type: 'boxplot',
          datasetIndex: 3,
          data: this.data0, //此处为盒须图数据
        },
        {
          color: 'blue1',
          barGap: '33.33333333333333%',
          name: 1,
          symbolPosition: 'end',
          symbolSize: 8,
          type: 'pictorialBar',
          z: 10000,
          data: [10, 22, 33, 55], //盒须图对应需要标点的值数据
          tooltip: {
            show: false,
          },
        },
      ],
    })
  },
}
</script>
<style scoped lang="less">
.boxPlot {
  width: 60vw;
  height: 50vh;
}
</style>
