/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass',
   {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.rawgit.com/progers/pathseg/master/pathseg.js', // Change to the script filename
      },
    },],
}
