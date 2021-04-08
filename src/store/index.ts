import type { App } from 'vue'
import { createStore } from 'vuex'
import { isDevMode } from '@/utils/env'

const store = createStore({
  strict: isDevMode(),
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export default store
