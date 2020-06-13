module.exports = {
  siteMetadata: {
    title: `Yousef Abdulkarim | Software Developer `,
    link: "https://github.com/joseDaKing/yousef-khalil-abdulkarim-portfolio-website",
    author: `Yousef Abdulkarim`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_blue.svg`
      },
    },
    "gatsby-plugin-offline",
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
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "roboto",
          "roboto\:100, 300, 400, 500, 700, 900"
        ],
        display: 'swap'
      }
    },
  ],
}
