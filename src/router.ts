import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

const routes = [
  { path: '/login', component: () => import('./views/Login.vue') },
  { path: '/:path(.*)*', component: () => import('./views/Error.vue') },
  {
    path: '/',
    name: 'layout',
    component: () => import('./views/Layout.vue'),
    children: [{ path: '/', component: () => import('./views/Home.vue'), meta: { title: '个人工作台' } }],
  },
]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router
