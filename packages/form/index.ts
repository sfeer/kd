import { App, Plugin } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import SearchForm from './SearchForm.vue'
import './style'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('kd-form', Form)
    app.component('kd-form-item', FormItem)
    app.component('kd-search-form', SearchForm)
  },
}
