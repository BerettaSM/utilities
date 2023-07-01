const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    // // Code splitting - no duplication - for multiple entry points
    // entry: {
    //     index: { import: './src/js/index.js', dependOn: 'shared' },
    //     sum: { import: './src/js/sum.js', dependOn: 'shared' },
    //     shared: 'lodash',
    // },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    plugins: [
        // Generate an index.html with all imports
        new HtmlWebpackPlugin(),
    ],
    output: {
        // [name] will be replaced with original file name.
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
