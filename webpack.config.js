const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/aipe.ts',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'aipe.js',
        path: path.resolve(__dirname, 'dist')
    }
}
