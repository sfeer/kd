import { App, Plugin } from 'vue'
import Cropper from './Cropper.vue'

export const CropperPlugin: Plugin = {
  install(app: App) {
    app.component('kd-cropper', Cropper)
  },
}
