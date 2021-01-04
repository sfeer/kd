import { createApp } from 'vue'
import App from './App'
import router from './router'
import {VueAxios} from './utils/request'
import './core'

createApp(App)
.use(router)
.use(VueAxios)
.mount('#app')
