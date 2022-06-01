import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
// @ts-ignore
import themePreprocessorPlugin from '@zougt/vite-plugin-theme-preprocessor'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    markdown(),
    themePreprocessorPlugin({
      less: {
        arbitraryMode: false,
        multipleScopeVars: [
          { scopeName: 'theme-default', path: 'src/theme/theme-default.less' },
          { scopeName: 'theme-dark', path: 'src/theme/theme-dark.less' },
        ],
      },
    }),
  ],
})
