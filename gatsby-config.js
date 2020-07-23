require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")
const config = require("./config")

console.log(process.env);

module.exports = {
  siteMetadata: {
    title: `Dgraph GraphQL`,
    description: `GraphQL docs`,
    author: `@dgraph`,
    siteUrl: `https://graphql.dgraph.io`,
  },
  pathPrefix: `/` + process.env.GATSBY_CURRENT_VERSION,
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-75364122-7`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1883865,
        sv: 6
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: { default: path.resolve("./src/components/layout.js") },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dgraph-graphql`,
        short_name: `graphql-web`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName:'GraphQL',
        queries: require("./src/utils/algolia-queries.js")
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
