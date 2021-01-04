import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/site/design/:sid',
    component: () => import('../views/page/XDesign')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
