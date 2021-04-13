// 基础模块
import '@/assets/base.less'
import Menu from '@/components/Menu.vue'
import MultiTab from '@/components/MultiTab.vue'
import router from '@/router'

const routers = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "base" */ '../views/base/Layout.vue'),
    children: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: "base" */ '../views/base/Home.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/ifr/*',
        component: () =>
          import(/* webpackChunkName: "base" */ '../views/base/Iframe.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "base" */ '../views/base/Login.vue'),
    meta: { title: '登录', requireAuth: false },
  },
]
routers.forEach((d) => {
  router.addRoute(d)
})
