import { App, Plugin } from 'vue'
import Frame from './Frame.vue'

export const FramePlugin: Plugin = {
  install(app: App) {
    app.component('kd-frame', Frame)
  },
}

export { Frame }
