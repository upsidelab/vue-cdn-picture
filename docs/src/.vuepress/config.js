const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue CDN Picture',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  base: '/vue-cdn-picture/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Upside',
        link: 'https://upsidelab.io',
      },
      {
        text: 'Github',
        link: 'https://github.com/upsidelab/vue-cdn-picture',
      },
    ],
    sidebar: {
      '/': [
        {
          title: 'Setup',
          collapsable: false,
          children: [
            '/',
          ]
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            '/examples/graph-cms',
            '/examples/contentful',
            '/examples/srcset',
            '/examples/alternative-text',
            '/examples/image-classes',
          ]
        },
        {
          title: 'Customization',
          collapsable: false,
          children: [
            '/customization/available-attributes',
            '/customization/custom-providers',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    sitemap: {
      hostname: 'https://docs.upsidelab.io/vue-cdn-picture/',
      exclude: ['/404.html']
    }
  }
}
