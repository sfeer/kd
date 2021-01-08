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
        // target: 'http://localhost:8080', // 本机
        target: 'http://kd.longjitech.com:7080/api', // KD
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api': ''}
      }
    }
  },

  productionSourceMap: false
}
