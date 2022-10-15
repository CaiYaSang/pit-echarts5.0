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
        trigger: 'item',
      },
      legend: {
        show: true,
        type: 'scroll' //
      },
      series: [
        {
          // name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'], //饼图半径
          label: {
            position: 'outer',  
            alignTo: 'none',
            bleedMargin: 5,
          },
          left: 0,
          right: '66%',
          top: 0,
          bottom: 0,
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' },
          ],
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'], //饼图半径
          roseType: 'area', // 或'radius'
          /* labelLine: {
            length: 40,    //视觉引导线第一段的长度。
            length2: 140,  //视觉引导项第二段的长度。
            smooth: true,  //是否平滑视觉引导线
          }, */
          left: '33.3333%',
          right: '0%',
          top: 0,
          bottom: 0,
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' },
            { value: 1048, name: '搜索引擎1' },
            { value: 735, name: '直接访问1' },
            { value: 580, name: '邮件营销1' },
            { value: 484, name: '联盟广告1' },
            { value: 300, name: '视频广告1' },
            { value: 1048, name: '搜索引擎2' },
            { value: 735, name: '直接访问2' },
            { value: 580, name: '邮件营销2' },
            { value: 484, name: '联盟广告2' },
            { value: 300, name: '视频广告2' },
            { value: 1048, name: '搜索引擎3' },
            { value: 735, name: '直接访问3' },
            { value: 580, name: '邮件营销3' },
            { value: 484, name: '联盟广告3' },
            { value: 300, name: '视频广告3' },
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
