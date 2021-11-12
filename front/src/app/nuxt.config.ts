module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'shindan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'shindan' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  css: ["~/assets/main.scss"],

  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    ],

  build: {
    /*
    ** Run ESLint on save
    */
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        light: {
          background: '#0D3C61',
          primary: '#0D3C61',
          secondary: '#f08080',
          accent: '#9370db',
          error: '#2f4f4f',    
        }
      }
    }
  },

  server: {
    host: process.env.CLIENT_HOST,
    port: process.env.CLIENT_PORT,
  },

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }  
}

