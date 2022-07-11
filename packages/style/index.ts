import './index.less'

/**
 * 切换预设主题
 * @param theme
 */
export function changeTheme(theme: string = 'default') {
  const dom = document.getElementById('antd-theme')
  dom?.setAttribute('href', `/antd/${theme}.css`)
  switch (theme) {
    case 'default':
      // 浅色模式-默认
      document.documentElement.removeAttribute('data-theme')
      break
    case 'dark':
      // 深色模式
      document.documentElement.setAttribute('data-theme', 'dark')
      break
  }
}

/**
 * 动态主题
 * @param variables
 */
export function dynamicTheme(variables: Record<string, string> = {}) {
  const head = document.getElementsByTagName('head')[0]
  const oldDom = document.getElementById('dynamic-theme')
  oldDom && oldDom.remove()
  const newDom = document.createElement('style')
  newDom.id = 'dynamic-theme'
  newDom.innerHTML = `:root {${Object.keys(variables)
    .map(key => `${key}: ${variables[key]};`)
    .join('')}}`
  head.appendChild(newDom)
}
