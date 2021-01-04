module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  devServer: {
    port: 8000,
    proxy: {
      '^/api': {
        target: 'http://localhost:8091', // 本机
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api': ''}
      }
    }
  },

  productionSourceMap: false
}
