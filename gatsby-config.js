module.exports = {
  siteMetadata: {
    title: "Social Media Management Compant in Sudbury, ON",
    titleTemplate: "%s",
    description: "TSS",
    url: "https://thesocialsoulpreneur.com/", // No trailing slash allowed!
    siteUrl: "https://thesocialsoulpreneur.com/",
    image: "/logo.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/privacy-policy/`, `/terms-of-use/`],
      },
    },
    // GA
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
