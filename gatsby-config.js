module.exports = {
  siteMetadata: {
    title: "simonachkar-www",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon Achkar's Personal Website`,
        short_name: `simonachkar-www`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2fd381`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
