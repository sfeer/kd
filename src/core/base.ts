// 基础模块
import '@/assets/base.less'
import Menu from '@/components/Menu'
import MultiTab from '@/components/MultiTab'
import router from '@/router'

const routers = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "base" */ '../views/base/Layout'),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "base" */ '../views/base/Home'),
        meta: {title: '首页'}
      },
      {
        path: '/ifr/*',
        component: () => import(/* webpackChunkName: "base" */ '../views/base/Iframe')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "base" */ '../views/base/Login'),
    meta: {title: '登录', requireAuth: false}
  }
]
routers.forEach(d => {
  router.addRoute(d)
})

export default app => app.use(Menu).use(MultiTab)
