// 按需加载 ant-design-vue 原生组件
import {App} from 'vue'
import {
  Button,
  ConfigProvider,
  Modal,
  Table,
  message,
  notification
} from 'ant-design-vue'

App.use(Button)
.use(ConfigProvider)
.use(Table)

App.config.globalProperties.$confirm = Modal.confirm
App.config.globalProperties.$message = message
App.config.globalProperties.$notification = notification
App.config.globalProperties.$info = Modal.info
App.config.globalProperties.$success = Modal.success
App.config.globalProperties.$error = Modal.error
App.config.globalProperties.$warning = Modal.warning

App.config.globalProperties.$kdMsg = {
  success: (msg, desc) => Vue.prototype.$notification.success({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  error: (msg, desc) => Vue.prototype.$notification.error({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  info: (msg, desc) => Vue.prototype.$notification.info({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  warning: (msg, desc) => Vue.prototype.$notification.warning({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  warn: (msg, desc) => Vue.prototype.$notification.warn({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  open: (msg, desc) => Vue.prototype.$notification.open({
    message: msg,
    description: desc,
    placement: 'bottomLeft'
  }),
  close: Vue.prototype.$notification.close,
  destory: Vue.prototype.$notification.destory
}
