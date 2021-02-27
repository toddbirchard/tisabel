require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        icons: [
          {
            src: `images/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `images/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `images/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
