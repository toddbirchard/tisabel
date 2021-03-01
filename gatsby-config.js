require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
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
        singleTypes: [`homepage`, `seo`],
        queryLimit: 1000,
      },
    },
    /**
     *  Transform Plugins
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     *  Style Plugins
     */
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        postCssPlugins: [
          require(`cssnano`)({ preset: `default` }),
          require(`stylelint`),
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tisabel4ever`,
        short_name: `tisabel4ever`,
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
    `gatsby-plugin-offline`,
  ],
}
