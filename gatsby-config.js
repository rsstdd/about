module.exports = {
  siteMetadata: {
    title: `A few options`,
    description: `Three options for the "about/company" section of a website`,
    author: `Ross Todd rssmtdd@gmail.com`,
    menuLinks: [
      {
        name: "home",
        link: "/"
      },
      {
        name: "exaple-2",
        link: "/example-2"
      },
      {
        name: "exaple-3",
        link: "/example-3"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      precision: 8 // For Bootstrap
    }
  ]
};
