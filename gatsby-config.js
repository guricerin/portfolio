/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `guricerin's portfolio`,
    author: `guricerin`,
    siteUrl: `https://guricerin.github.io/portfolio`,
  },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-image`, `gatsby-plugin-sharp`],
}
