const path = require('path');

module.exports = {
    basePath: '/',
    assetPrefix: '/',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}