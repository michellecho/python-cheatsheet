module.exports = {
  siteMetadata: {
    title: `Python Cheatsheet`,
    description: `Quick Guide for Python Functions`,
    author: `@michellecho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Python Cheatsheet`,
        short_name: `Python CS`,
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
