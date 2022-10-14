import Vue from 'vue'
import Route from 'vue-router'
Vue.use(Route)

const routes = [
  {
    path: '/line',
    component: () => import('@/views/line'),
  },
  {
    path: '/histogram',
    component: () => import('@/views/histogram'),
  },
  {
    path: '/plat',
    component: () => import('@/views/plat'),
  },
  {
    path: '/pie',
    component: () => import('@/views/pie'),
  },
  {
    path: '/funnel',
    component: () => import('@/views/funnel'),
  },
  {
    path: '/boxplot',
    component: () => import('@/views/boxplot'),
  },
]

const route = new Route({
  mode: 'history',
  routes,
})

export default route
