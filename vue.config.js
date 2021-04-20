module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          hack: `true; @import '~@/design/var.less';`,
        },
        javascriptEnabled: true,
      },
    },
  },

  devServer: {
    port: 3100,
    proxy: {
      '^/api': {
        // target: 'http://localhost:8080', // 本机
        target: 'http://kd.longjitech.com:7080/api', // KD
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' },
      },
    },
  },

  productionSourceMap: false,
}
