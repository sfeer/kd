import { App } from 'vue'
import { Button, ConfigProvider, Layout, message } from 'ant-design-vue'

export function setupAntDesign(app: App<Element>) {
  app.use(Button)
  app.use(ConfigProvider)
  app.use(Layout)

  app.config.globalProperties.$message = message
}
