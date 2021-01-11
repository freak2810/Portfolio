const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass({
    cssModules: true,
    sassLoaderOptions: {
        // Resolving SASS absolute imports
        includePaths: [path.resolve(__dirname, 'public')],
    },
    cssLoaderOptions: {
        localIdentName: '[hash:base64]',
    },
})