import { App } from 'vue'
import { Button, ConfigProvider, Layout, message } from 'ant-design-vue'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'

export function setupAntDesign(app: App<Element>) {
  app
    .use(Button)
    .use(ConfigProvider)
    .use(Layout)
    .use(ProLayout)
    .use(PageContainer)

  app.config.globalProperties.$message = message
}
