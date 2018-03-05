module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cvue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    "@/assets/css/style.scss"
  ],
  plugins: ['~/plugins/global.js'],
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
            'presets': [
              'env',
              'stage-2'
            ],
            'plugins': [
              'transform-runtime'
            ]
          }
        })
      }
    }
  }
}
