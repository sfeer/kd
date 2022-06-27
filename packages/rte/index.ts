import { App, Plugin } from 'vue'
import Rte from './Rte.vue'
import './style'

export const RtePlugin: Plugin = {
  install(app: App) {
    app.component('kd-rte', Rte)
  },
}

export { Rte }
