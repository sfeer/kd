import { App, Plugin } from 'vue'
import Table from './Table.vue'

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('kd-table', Table)
  },
}
