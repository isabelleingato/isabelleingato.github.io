module.exports = {
    siteMetadata: {
        title: `Isabelle Ingato`,
        siteUrl: `https://isabelleingato.github.io`,
        description: `Personal website for Isabelle Ingato`,
    },
    plugins: [
        //`gatsby-plugin-theme-ui`,
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
    ],
}
