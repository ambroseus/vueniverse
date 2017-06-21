const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  build: {
    vendor: ['vuetify', 'jwt-decode', 'axios']
  },
  buildDir: 'dist/client',
  cache: true,
  css: [{ src: '~assets/style/app.styl', lang: 'styl' }],
  env: {
    API_URL: process.env.API_URL,
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT
  },
  head: {
    title: '{{name}}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  manifest: {
    name: '{{name}}',
    description: '{{description}}',
    theme_color: '#188269'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache'
  ],
  plugins: ['~plugins/vuetify.js'],
  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  },
  router: {
    middleware: ['ssr-cookie', 'https']
  },
  srcDir: path.resolve(__dirname, 'src', 'client')
}
