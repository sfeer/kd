import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'

const app = createApp(App)

// 路由配置
setupRouter(app)

// 状态存储
setupStore(app)

// AntDesign
setupAntDesin(app)

// 路由加载完成后渲染页面
router.isReady().then(() => {
  app.mount('#app', true)
})
