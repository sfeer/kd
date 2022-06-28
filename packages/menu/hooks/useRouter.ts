import { MenuItem } from '../menuTypes'
import { Router, useRouter } from 'vue-router'
import { camelCase, upperFirst } from 'lodash-es'

const modules = import.meta.glob('/src/views/**/*.vue')

function addRouters(tree: Array<MenuItem> | undefined, router: Router) {
  tree?.forEach(v => {
    if (v.child) {
      addRouters(v.child, router)
    } else if (v.url) {
      const tmp = v.url.split('/')
      const file = upperFirst(camelCase(tmp.pop()))
      router.addRoute({
        path: v.url,
        component: modules[`/src/views${tmp.join('/')}/${file}.vue`],
        meta: { title: v.name },
      })
    }
  })
}

export { useRouter, addRouters }
