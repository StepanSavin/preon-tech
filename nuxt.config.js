export default {
  target: 'static',

  head: {
    title: 'preon-tech',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/index.scss', '~/assets/styles/fonts.scss'],

  plugins: [{ src: '~/plugins/fullpage', mode: 'client' }],
  components: [{ path: '~/components/ui/LazyImage.vue' }],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-lazysizes',
  ],

  modules: ['@nuxtjs/axios', 'nuxt-fullpage.js'],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  axios: {
    baseURL: '/',
  },

  build: {},
}
