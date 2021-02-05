/*
 定义加载模块
 base 基础模块
 page 页面模块
 demo 演示模块
 */
import antdv from './antdv'
import base from './base'
import demo from './demo'
import page from './page'

export default app => app.use(antdv).use(base).use(demo).use(page)
