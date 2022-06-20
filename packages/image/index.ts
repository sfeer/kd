import { App, Plugin } from 'vue'
import Image from './Image.vue'

export const ImagePlugin: Plugin = {
  install(app: App) {
    app.component('kd-image', Image)
  },
}

export { Image }
