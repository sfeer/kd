import baseConfig from './base.config'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: 'packages/index.ts',
      name: 'kd',
      fileName: format => `kd.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ant-design-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'Antd'
        },
      },
    },
  },
  plugins: [...(baseConfig as any).plugins, dts()],
})