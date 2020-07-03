module.exports = {
    siteMetadata: {
        title: `Fredrik Omstedt`,
        description: `The personal website of Fredrik Omstedt, including a portfolio and CV.`,
        author: `@Fredrik Omstedt`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.js`),
            },
        },
    ],
}
