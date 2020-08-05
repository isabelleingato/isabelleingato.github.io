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
        `gatsby-plugin-sass`,
    ],
}
