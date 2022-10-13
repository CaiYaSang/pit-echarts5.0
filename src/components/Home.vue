<template>
  <div>
    <el-container style="height: 937px">
      <!-- 左侧导航 -->
      <el-aside width="200px" height="100%" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <router-link to="/">
                <span class="picture">图表</span>
              </router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">折线图</el-menu-item>
              <el-menu-item index="1-2">柱状图</el-menu-item>
              <el-menu-item index="1-3">饼图</el-menu-item>
              <el-menu-item index="1-4">盒须图</el-menu-item>
              <el-menu-item index="1-5">地图</el-menu-item>
              <el-menu-item index="1-6">漏斗图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 面包屑 -->
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <!-- 可视区 -->
          <router-view></router-view>
          <h1>hello</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home-',
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  align-items:center; 
  height: 30px !important;
  font-size: 16px;
  line-height: 30px;
  background-color: #ffffff;
  color: #333;
}
.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-aside {
  color: #333;
}

.picture {
  font-size: 18px;
  font-weight: 600;
}
</style>
<style lang="less" scoped>
/deep/ .el-icon-s-help {
  font-size: 22px;
}
</style>
