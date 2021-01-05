// 模块样式
import '@/assets/page.less'

// 模块组件
import SBox from '@/components/SBox'
import '@/components/SBox/style/index.less'

// 模块路由
import router from '@/router'

router.addRoute({
  path: '/page/design/:pid',
  component: () => import('../views/page/SDesign')
})

export default app => {
  app.use(SBox)
}
