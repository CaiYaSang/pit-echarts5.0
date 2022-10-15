<template>
  <div>
    <div class="funnel" ref="funnel"></div>
  </div>
</template>
<script>
export default {
  name: 'Pie-',
  mounted() {
    let funnelCharts = this.$echarts.init(this.$refs.funnel)

    funnelCharts.setOption({
      series: [
        {
          name: '漏斗图',
          type: 'funnel', //图表类型
          data: [
            { value: 60, name: '访问' },
            { value: 40, name: '咨询' },
            { value: 20, name: '订单' },
            { value: 80, name: '点击' },
            { value: 100, name: '展现' },
          ],
          label: {
            show: true,
            position: 'inside', //此设置为居中中
          },
          minSize: '10%', //数据最小值 min 映射的宽度。
        },
      ],
    })
  },
}
</script>
<style scoped lang="less">
.funnel {
  width: 60vw;
  height: 50vh;
}
</style>
