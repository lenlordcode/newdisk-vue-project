const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/newdisk-vue-project/',
  devServer: {
    historyApiFallback: true,
  },
})
