import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { basicRoutes } from './routers'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: basicRoutes,
  strict: true,
  // TODO scrollBehavior
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
