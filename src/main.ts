import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import core from '@/core'

createApp(App)
    .use(router)
    .use(core)
    .mount('#app')
