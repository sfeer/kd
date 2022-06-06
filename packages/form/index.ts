import { App, Plugin } from 'vue'
import Form from './src/Form.vue'
import FormItem from './src/FormItem.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('kd-form', Form)
  },
}
