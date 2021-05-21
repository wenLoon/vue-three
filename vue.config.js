'use strict'

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8090,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   '/geoserver': {
    //     target: 'http://182.150.116.28:28001',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/geoserver': '/geoserver'
    //     }
    //   }, 
    // }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'vue-threejs-demo'
      return args
    })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    },
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    plugins: [],
    module: {
    }
  }
}
