const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [
            {
                // For .scss files. Make sure to import it in the .js entry point for webpack to process it.
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // No need for style-loader with the above plugin, it already takes care of that.
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
});
