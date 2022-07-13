import { App, Plugin } from 'vue'
import ColorPicker from './ColorPicker.vue'

export const ColorPickerPlugin: Plugin = {
  install(app: App) {
    app.component('kd-color-picker', ColorPicker)
  },
}
