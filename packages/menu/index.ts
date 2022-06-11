import { App, Plugin } from 'vue'
import Menu from './Menu.vue'
import './style'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('kd-menu', Menu)
  },
}

export { Menu }
