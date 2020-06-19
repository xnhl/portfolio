export default {
  mode: 'universal',
  loading: { color: '#fff' },
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: [
      './assets/*.sass'
    ],
  },
 generate: {
   routes: [
    '/',
    '/about',
    '/dev',
    '/images'
   ]
 },
  build: {
    extend (config, ctx) {
    },
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }
}
