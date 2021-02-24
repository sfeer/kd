import MultiTab from './MultiTab'
import { ref, reactive, readonly } from 'vue'

const count = ref(40)
const user = reactive({
  id: 13,
  name: 'James',
})
const tabs = ref([])

export default {
  install: (app) => {
    app.config.globalProperties.$multiTab = {
      open(path, name) {
        user.id++
        user.name = name
        count.value++
        tabs.value.push({ path, name })
      },
      count,
      user,
      tabs: readonly(tabs),
    }

    app.component(MultiTab.name, MultiTab)
  },
}
