const siteMetadata = {
  title: `<Parth/>`,
  description: `This is the personal portfolio website of Parth Katiyar where he showcases his skills,personal interests and projects to an audience.`,
  author: `Parth Katiyar`,
  type:`Personal Portfolio`,
  defaultLanguage: 'en',
  url:"http://localhost:8000/",
  keywords: `Parth Katiyar, Parth K,Parth,Parth Personal website,Parth Personal Portfolio`,
  image: `src/assets/images/siteImage.png`,
  pages: {
    home: '/',
    aboutme:'about',
    contact: 'contact',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/Parth442002',
    facebook: 'https://www.facebook.com/parth.katiyar.92/',
    twitter: 'https://twitter.com/parth__04',
    instagram: 'https://www.instagram.com/_parth4_/',
    linkedn: 'https://www.linkedin.com/in/parth-katiyar-1224a3206/',
  },
};


module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-theme-ui`,

    {
      resolve:`gatsby-plugin-mdx`,
      options:{
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
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
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/Posts`,
        name: `Posts`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
