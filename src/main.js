import {createApp} from 'vue'
import App from './App'
import router from './router'
import antdv from '@/core/antdv'
import page from '@/core/page'
import demo from '@/core/demo'

// 主样式
import '@/assets/main.less'

createApp(App)
.use(router)
.use(antdv)
.use(page)
.use(demo)
.mount('#app')
