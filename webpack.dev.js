const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {merge} = require('webpack-merge')
const common = require("./webpack.common")


module.exports = merge( common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/build/'),
        filename: 'js/[name].bundle.js', // JS files with content hash for cache busting
        clean: true, // Clean the output directory before each build
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'resources/index.html'), // Path to the custom template
            filename: 'index.html', // Output file will be in the `public` folder
            inject: 'body', // Inject JS files at the end of the body tag
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // CSS files with content hash for cache busting
        })
    ],
    devServer: {
        headers: {
            'Cache-Control': 'no-store',
        },
        static: [
            {
                directory: path.resolve(__dirname, 'public'),
            },
        ],
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
})