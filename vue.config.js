module.exports = {
  publicPath: '/vue-cli-element-starter/',

  devServer: {
    proxy: {
      '/api': {
        // 用于匹配接口
        target: 'http://www.baidu.com/', // 请求的正式模式下的链接，比如说 "http://www.baidu.com/"
        ws: true,
        changeOrigin: true
      }
    }
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true
  }
}
