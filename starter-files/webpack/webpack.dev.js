const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'development',
    // So we can map errors to original files.
    devtool: 'inline-source-map',
    devServer: {
        // For webpack-dev-server
        static: './dist',
    },
    module: {
        rules: [
            {
                // For .css files. Make sure to import it in the .js entry point for webpack to process it.
                test: /\.css$/i,
                use: [
                    // For CSS injection into the dom.
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
});
