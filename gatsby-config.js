require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    FAST_REFRESH: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    /**
     *  Source Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.tisabel4ever.com`,
        contentTypes: [`event`, `info`, `info-category`],
        singleTypes: [`homepage`, `seo`, `venue`],
        queryLimit: 1000,
      },
    },
    /**
     *  Transform Plugins
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    /**
     *  Style Plugins
     */
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 2,
            features: {
              "nesting-rules": true,
            },
          }),
          require(`cssnano`)({ preset: `default` }),
          require(`stylelint`),
          require(`autoprefixer`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    /**
     *  SEO Plugins
     */
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tisabel`,
        short_name: `tisabelr`,
        start_url: `/`,
        lang: `en`,
        display: `standalone`,
        background_color: `#fff`,
        theme_color: `#f6c75f`,
        legacy: false,
        icon: `src/images/icon.png`,
      },
    },
    /**
     *  E-commerce Plugins
     */
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [`Product`, `Price`],
        secretKey: process.env.STRIPE_API_KEY,
        downloadFiles: true,
      },
    },
    /**
     *  Analytics Plugins
     */
    {
      resolve: `gatsby-plugin-gauges`,
      options: {
        siteId: process.env.GAUGES_SITE_ID,
      },
    },
    /**
     *  Misc Plugins
     */
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
  ],
}
