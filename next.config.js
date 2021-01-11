const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    sassLoaderOptions: {
        // Resolving SASS absolute imports
        includePaths: [path.resolve(__dirname, 'src')],
    },
    cssLoaderOptions: {
        localIdentName: '[hash:base64]',
    },
})