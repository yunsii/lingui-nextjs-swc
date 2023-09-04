/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'sr', 'es', 'pseudo'],
    defaultLocale: 'en'
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]]
  },
  webpack: (config) => {
    config.plugins.push(
      require('unplugin-auto-import/webpack')({
        include: [
          /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
        ],
        imports: [
          'react',
          {
            '@lingui/macro': ['t', 'Trans']
          }
        ]
      })
    )

    return config
  }
}
