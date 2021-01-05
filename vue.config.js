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
        target: 'http://localhost:8080', // 本机
        // target: 'http://192.168.0.215:8080', // docker
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api': ''}
      }
    }
  },

  productionSourceMap: false
}
