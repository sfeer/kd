import { App, Plugin } from 'vue'
import Layout from './Layout.vue'

export const LayoutPlugin: Plugin = {
  install(app: App) {
    app.component('kd-layout', Layout)
  },
}

export { Layout }
