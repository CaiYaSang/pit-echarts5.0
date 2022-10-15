<template>
  <div>
    <div class="pie" ref="pie"></div>
  </div>
</template>
<script>
export default {
  name: 'Pie-',
  mounted() {
    let pieCharts = this.$echarts.init(this.$refs.pie)

    pieCharts.setOption({
      tooltip: {
          trigger: "item",
        },
        legend: {
          show:true
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ['40%', '70%'],//饼图半径
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],

    })
  },
}
</script>
<style scoped lang="less">
.pie {
  width: 60vw;
  height: 50vh;
}
</style>
