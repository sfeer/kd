import {createApp} from 'vue'
import App from './App'
import router from './router'
import antdv from '@/core/antdv'
import page from '@/core/page'

// 主样式
import '@/assets/main.less'

const app = createApp(App)
.use(router)
.use(antdv)
.use(page)

app.mount('#app')
