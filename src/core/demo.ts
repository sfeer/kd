// 演示模块
import router from '@/router'
import MultiTab from '@/components/MultiTab'

const routers = [
  {
    path: '/demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/Demo.vue')
  }
]
routers.forEach(d => {
  router.addRoute(d)
})
