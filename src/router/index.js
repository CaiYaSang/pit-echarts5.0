import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

const routes = [
  {
    path: '/line',
    component: () => import('@/views/line'),
    meta: { title: '折线图' },
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

const route = new VueRouter({
  mode: 'history',
  routes,
})

export default route
