module.exports = {
  siteMetadata: {
    title: `Isabelle Ingato`,
    siteUrl: `https://isabelleingato.github.io`,
    description: `Personal website for Isabelle Ingato`,
  },
  plugins: [
    //`gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Isabelle Ingato`,
        short_name: `ii`,
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#005875`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
      },
    },
  ],
};
