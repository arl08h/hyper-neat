module.exports = {
  pathPrefix: `/neatgreens/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Neat Greens',
    description: 'San Diego Microgreens',
    url: "https//www.neatgreens.com",
    image:'src/assets/img/NG-website-7.jpg',
    keywords: 'san diego microgreens, neat greens, microgreens san diego, local produce, microgreens',


  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Neat Greens',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
