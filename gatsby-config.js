module.exports = {
    siteMetadata: {
        title: `Fredrik Omstedt`,
        description: `The personal website of Fredrik Omstedt, including a portfolio and CV.`,
        author: `@Fredrik Omstedt`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.js`),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Fredrik Omstedt',
                short_name: 'Fredrik Omstedt',
                start_url: '/',
                background_color: '#333333',
                theme_color: '#ffffff',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/images/website-logo.png', // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
