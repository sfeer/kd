import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import Kd from '../packages'
import menu from './config/menu'
import '../packages/style'
import { generateRoutes } from '../packages'

const app = createApp(App)

// 路由全局配置
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }

  if (app.config.globalProperties.$user === undefined) {
    // 1 获取用户信息
    const user = { id: 1, name: '公司管理员', role: 'admin' }
    app.config.globalProperties.$user = user
    app.provide('user', user)
    // 2 根据用户信息获取对应功能菜单
    app.provide('menu', menu)

    generateRoutes(menu, import.meta.glob('/src/views/**/*.vue')).forEach(v => router.addRoute('layout', v))
    next(to)
  } else if (to.path === '/login') {
    next({ path: '/', replace: true })
  } else {
    next()
  }
})

app.use(router).use(Antd).use(Kd).mount('#app')
