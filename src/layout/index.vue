<template>
  <div>
    <div class="homepage">
        <!-- 左侧导航 -->
      <div class="left">
        <el-aside>
          <el-menu :default-openeds="['1', '1']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-help"></i>
                <router-link to="/home">
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
      </div>
        <!-- 面包屑 -->
      <div class="top">
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item to='/home'>首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
      </div>
        <!-- 可视区 -->
      <div class="view">
        <div>
          <h1>hello</h1>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Aasenem-',
}
</script>
<style scoped lang="less">
.homepage {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background: #ffffff;

  .left {
    width: 10%;
    height: 100%;
    background-color: #ffffff;
  }

  .top {
    line-height: 2.6667rem;
    width: 90%;
    height: 5%;
    .el-header {
      display: flex;
      align-items: center;
      height: 100% !important;
      font-size: 0.4267rem;
      line-height: 0.8rem;
      background-color: #ffffff;
      color: #333;
      .el-breadcrumb {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }

  .view {
    position: absolute;
    right: 0;
    top: 5%;
    width: 90%;
    height: 95%;
    background-color: rgb(231, 231, 231);
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<style lang="less" scoped>
.el-aside {
  color: #333;
  width: 100% !important;
  height: 100%;
}

.picture {
  font-size: 18px;
  font-weight: 600;
}

/deep/ .el-icon-s-help {
  font-size: 0.58rem;
}
</style>
