import {
  Button,
  ConfigProvider,
  Modal,
  Table,
  message,
  notification
} from 'ant-design-vue'

// 全局变量
const props = {
  $confirm: Modal.confirm,
  $message: message,
  $notification: notification,
  $info: Modal.info,
  $success: Modal.success,
  $error: Modal.error,
  $warning: Modal.warning,
  $kdMsg: {
    success: (msg, desc) => notification.success({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    error: (msg, desc) => notification.error({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    info: (msg, desc) => notification.info({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    warning: (msg, desc) => notification.warning({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    warn: (msg, desc) => notification.warn({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    open: (msg, desc) => notification.open({
      message: msg,
      description: desc,
      placement: 'bottomLeft'
    }),
    close: notification.close,
    destory: notification.destory
  }
}

export default app => {
  app.use(Button)
  .use(ConfigProvider)
  .use(Table)

  Object.defineProperties(app.config.globalProperties, props)
}
