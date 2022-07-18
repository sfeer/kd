import { App, Plugin } from 'vue'
import Echarts from './Echarts.vue'
import './style'

export const ChartPlugin: Plugin = {
  install(app: App) {
    app.component('kd-echarts', Echarts)
  },
}
