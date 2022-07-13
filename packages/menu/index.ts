import { App, Plugin } from 'vue'
import Menu from './Menu.vue'
import './style'
import { MenuItem } from './menuTypes'
import type { RouteRecordRaw } from 'vue-router'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('kd-menu', Menu)
  },
}

export function generateRoutes(tree: MenuItem[]): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  tree.forEach(v => {
    if (v.child) {
      res.push(...generateRoutes(v.child))
    } else if (v.url) {
      res.push({
        path: v.url,
        component: () => {},
        meta: { title: v.name },
      })
    }
  })
  return res
}
