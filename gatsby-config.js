module.exports = {
  siteMetadata: {
    title: `새해 복 많이 받으세요`,
    description: "새해 복 많이 받으세요 여러분",
    author: `Kang seung hun`,
    siteUrl: `https://bit.ly/3EzJUo3`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `새해 복 많이 받으세요`,
        short_name: `Happy new Year`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
