module.exports = {
  env: {
    test: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            useBuiltIns: 'entry',
            targets: {
              node: 'current'
            },
            modules: 'commonjs'
          }
        ]
      ]
    }
  }
}
