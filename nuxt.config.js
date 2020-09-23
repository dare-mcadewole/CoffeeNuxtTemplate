export default {
  server: {
    host: process.env.host || '0.0.0.0',
    port: process.env.port || 3030
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt + CoffeeScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        },
    ],

    script: [
        { type: 'module', src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js' },
        { type: 'nomodule', src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    '~/modules/coffeescript',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
  ],

  /**
   * Axios HTTP Client
   */
  axios: {
    baseURL: ''
  },
  /**
   * 
   */
  styleResources: {
      scss: [
          '~/assets/scss/abstracts/_variables.scss',
          '~/assets/scss/base/_typography.scss',
      ]
  },
  /**
   * Import main CSS
   */
  css: [
      '@/assets/scss/main.scss'
  ],
  /**
   * Necessary Plugins
   */
  plugins: [
      '~/plugins/http.coffee',
      '~/plugins/filters.coffee',
      '~/plugins/directives.coffee',
      '~/plugins/components.coffee',
      '~/plugins/ion_icon.coffee',
      '~/plugins/utils.coffee',
  ],

  build: {
      transpile: [
          'vee-validate/dist/rules'
      ],
      preset: {
          stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
      },
      optimization: {
          splitChunks: {
              cacheGroups: {
                  tailwindConfig: {
                      test: /tailwind\.config/,
                      chunks: 'all',
                      priority: 10,
                      name: true
                  }
              }
          }
      }
  },

  env: {
      auth: {
        TOKEN_ID: 'SSID'
    },
  }


}
