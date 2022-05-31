import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    markdown()
  ]
})
