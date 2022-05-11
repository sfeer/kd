const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: { javascriptEnabled: true },
      },
    },
  },
  devServer: {
    port: 8000,
    proxy: {
      '^/api': {
        target: 'http://192.168.0.215:8200/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  productionSourceMap: false,
  transpileDependencies: true,
})
