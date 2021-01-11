const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass({
    cssModules: true,
    sassOptions: {
        // Resolving SASS absolute imports
        includePaths: [path.resolve(__dirname, 'styles')],
    },
    cssLoaderOptions: {
        localIdentName: '[hash:base64]',
    },
})