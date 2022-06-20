import { App, Plugin } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('kd-form', Form)
    app.component('kd-form-item', FormItem)
  },
}
