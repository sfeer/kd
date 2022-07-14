import { App, Plugin } from 'vue'
import Menu from './Menu.vue'
import './style'
import { MenuItem } from './menuTypes'
import type { RouteRecordRaw } from 'vue-router'
import { camelCase, upperFirst } from 'lodash-es'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('kd-menu', Menu)
  },
}

export function generateRoutes(tree: MenuItem[], modules): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  tree.forEach(v => {
    if (v.child) {
      res.push(...generateRoutes(v.child, modules))
    } else if (v.url) {
      const tmp = v.url.split('/')
      const file = upperFirst(camelCase(tmp.pop()))
      res.push({
        path: v.url,
        component: modules[`/src/views${tmp.join('/')}/${file}.vue`],
        meta: { title: v.name },
      })
    }
  })
  return res
}
