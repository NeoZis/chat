export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'chat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyA4JiOo1p7aW-H2eQqcKsDkcAeY--MRYIQ",
      authDomain: "chat-595ff.firebaseapp.com",
      databaseURL: "https://chat-595ff.firebaseio.com",
      projectId: "chat-595ff",
      storageBucket: "chat-595ff.appspot.com",
      messagingSenderId: "335724468629",
      appId: "1:335724468629:web:49d7b718a17fd3fa8a7e9c"
    },
    services: {
      realtimeDb: true,
      firestore: {
        memoryOnly: false, // default
        static: false, // default
        preload: false, // default
        chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
