import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Kd from '../packages'
import Preview from './components/Preview.vue'

import 'ant-design-vue/dist/antd.variable.min.css'

const app = createApp(App)
app.component('kd-preview', Preview)
app.use(router).use(Kd).mount('#app')
