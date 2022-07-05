module.exports = {
  siteMetadata: {
    description: "Sumesh Sharma's Personal Website",
    locale: "en",
    title: "Sumesh Sharma",
    // formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    `Gatsby-plugin-sharp`,
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-blue",
      },
    },
  ],
}
