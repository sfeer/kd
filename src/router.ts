import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import comps from './config/comp.config'

const routes = comps?.map(c=>({
  title: c.cname,
  name: c.name,
  path: `/components/${c.name}`,
  component: () => import(`../packages/${c.name}/docs/README.md`),
}))

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
