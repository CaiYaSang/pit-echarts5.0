<template>
  <div>
    <div class="plat" ref="plat"></div>
  </div>
</template>
<script>
export default {
  name: 'plat-',
  mounted() {
    let platCharts = this.$echarts.init(this.$refs.plat)

    platCharts.setOption({})
  },
}
</script>
<style scoped lang="less">
.pie {
  width: 60vw;
  height: 50vh;
}
</style>
