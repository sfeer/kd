import { App, Plugin } from 'vue'
import Row from './src/row.vue'
import Col from './src/col.vue'

export const LayoutPlugin: Plugin = {
  install(app: App) {
    app.component('kd-row', Row)
    app.component('kd-col', Col)
  },
}

export { Row, Col }
