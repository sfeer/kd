import { App, Plugin } from 'vue'
import Form from './Form.vue'
import SearchForm from './SearchForm.vue'

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('kd-form', Form)
    app.component('kd-search-form', SearchForm)
  },
}
