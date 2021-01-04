// 全局过滤器
import {App} from 'vue'

// 截取时间
App.filter('shortDatetime', v => v ? v.substring(5, 16) : '')

// 截取年月日
App.filter('shortDate', v => v ? v.substring(0, 10) : '')
