import dark from './theme-dark.less'
import def from './theme-default.less'

export function changeTheme(theme: string) {
  if (theme === 'dark') {
    addStyle(dark)
  } else if (theme === 'default') {
    addStyle(def)
  }
}

export function addStyle(content: string) {
  const head = document.getElementsByTagName('head')[0]
  const styles = Array.from(head.getElementsByTagName('style'))
  styles.forEach(v => v.getAttribute('data-type') === 'theme' && v.remove())
  const styleDom = document.createElement('style')
  styleDom.dataset.type = 'theme'
  styleDom.innerHTML = content
  head.appendChild(styleDom)
}
