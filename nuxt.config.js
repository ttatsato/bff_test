const API_BASE_URL = 'https://bff-test-tatsu.herokuapp.com'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bff',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },
  proxy: {
    '/bff': {
      target: API_BASE_URL,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  serverMiddleware: [{ path: '/bff', handler: '~/bff/index.ts' }],
  env: {
    API_BASE_URL,
  },
}
