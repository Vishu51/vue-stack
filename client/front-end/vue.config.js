const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify']
})

config => {
  config.module
    .rule('eslint')
    .use('eslint-loader')
    .tap(options => {
      options.fix = true
      return options
    })
  config.plugin('html').tap(args => {
    args[0].title = 'Dashboard'
    return args
  })
}
