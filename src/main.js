import {createApp} from 'vue'
import App from './App'
import router from './router'
import core from '@/core'

const app = createApp(App)
app.config.productionTip = false
app.use(router).use(core).mount('#app')
