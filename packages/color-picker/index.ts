import { App, Plugin } from 'vue'
import ColorPicker from './src/index.vue'

export const ColorPickerPlugin: Plugin = {
  install(app: App) {
    app.component('kd-color-picker', ColorPicker)
  },
}

export { ColorPicker }
