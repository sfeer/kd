import { App, Plugin } from 'vue'
import Table from './Table.vue'
import './style'

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('kd-table', Table)
  },
}
