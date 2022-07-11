import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import Kd from '../packages'

import '../packages/style'

const app = createApp(App)

app.use(router).use(Antd).use(Kd).mount('#app')
