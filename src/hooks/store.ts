import { reactive, readonly } from 'vue'

const _config = reactive({
  siderWidth: 220,
  headerHeight: 50,
  collapsed: false,
  theme: 'default', // default dark
})

export const config = readonly(_config)

export function collapse(v: boolean) {
  _config.collapsed = v
  _config.siderWidth = v ? 50 : 220
}

export function setTheme(v: string) {
  _config.theme = v
}

const _user = reactive({
  id: 1,
  name: '',
})
