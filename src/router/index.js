import Vue from "vue";
import Route from 'vue-router'
Vue.use(Route)


const routes = [
  {
    path:'/home',
    component:() => import('@/layout'),
    
  }
]


const route = new Route({
  mode:"history",
  routes
})

export default route