import { App, Plugin } from 'vue'
import Button from './Button.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('kd-button', Button)
  },
}

export { Button }
