<template>
  <div>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
export default {
  name: 'Line-',
  mounted() {
    let lineCharts = this.$echarts.init(this.$refs.line)

    lineCharts.setOption({
      xAxis: {
        type: 'category', //x轴坐标轴类型
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //坐标轴数据
      },
      yAxis: [
        {
          type: 'value', //y轴坐标轴类型
        },
        {
          type: "value", //y轴坐标轴类型
          axisLabel:{
            formatter: '{value} kg'
          }
        }
      ],
      tooltip: {
        //鼠标hover提示框
        show: true,
        trigger: 'axis',
      },
      series: [
        {
          //多曲线堆叠:给每项设置 stack，将需要堆叠的折线 stack 设置为同一个值
          stack: 'stack1',
          yAxisIndex:1,
          name: '折线1',
          data: [820, 932, 901, 934, 1290, 1330, 1320], //对应的数据
          type: 'line', //图表类型
          smooth: true, //是否平滑曲线显示。
          areaStyle: {
            //区域填充样式 设置后显示成区域面积图
            color: '#81c097', //充色
            opacity: 0.2, //填充色透明度
          },
           markPoint: {
            //在折线上标出最大及最小值
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' },
            ],
          },
        },
        {
          stack: 'stack1',
          // yAxisIndex:1, 设置双 y 轴后若想使用需要在 series 的某一项中明确指定 yAxisIndex:yAxis 的 index
          name: '折线2',
          data: [800, 32, 501, 634, 299, 130, 320], //对应的数据
          type: 'line', //图表类型
          smooth: true, //是否平滑曲线显示。
          areaStyle: {
            //区域填充样式 设置后显示成区域面积图
          },
        },
      ],
    })
  },
}
</script>
<style scoped lang="less">
.line {
  width: 60vw;
  height: 50vh;
}
</style>
