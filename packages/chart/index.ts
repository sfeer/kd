import { App, Plugin } from 'vue'
import Echarts from './Echarts.vue'

export const ChartPlugin: Plugin = {
  install(app: App) {
    app.component('kd-echarts', Echarts)
  },
}
