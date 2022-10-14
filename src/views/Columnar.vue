<template>
  <div>
    <div class="Columnar" ref="bar"></div>
  </div>
</template>
<script>
export default {
  name: 'Columnar-',
  mounted() {
    let lineCharts = this.$echarts.init(this.$refs.bar)
    lineCharts.setOption({
      xAxis: {
        type: 'value', //x轴坐标轴类型
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //坐标轴数据
      },
      yAxis: [
        {
          //  type: 'value', //y轴坐标轴类型 
          type: 'category', //y轴坐标轴类型 
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] //坐标轴数据
        },
      ],
      series: [
        {
          name:'柱状图1',
          stack:'1' ,
          data: [820, 932, 901, 934, 1290, 1330, 1320], //对应的数据
          type: 'bar', //图表类型
         /*  showBackground: true, //显示背景
          backgroundStyle: {color: 'red'},//背景颜色 */
        },
        {
          name:'柱状图2',
          stack:'1' ,
          data: [820, 932, 901, 934, 1290, 1330, 1320], //对应的数据
          type: "line", //图表类型
        },
      ],
    })
  },
}
</script>
<style scoped lang="less">
.Columnar {
  width: 60vw;
  height: 50vh;
}
</style>
