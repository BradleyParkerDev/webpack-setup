// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Ensure this is installed

// module.exports = {
//     mode: 'development',
//     devtool: 'source-map',
//     entry: path.resolve(__dirname, 'resources/ts/index.ts'),
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: {
//                     loader: 'ts-loader',
//                     options: {
//                         transpileOnly: true,
//                     },
//                 },
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.css$/,
//                 include: path.resolve(__dirname, "resources/css"),
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'postcss-loader'
//                 ],
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.jsx', '.js'],
//     },
//     output: {
//         path: path.resolve(__dirname, 'public/js'),
//         filename: 'bundle.[contenthash].js',
//         clean: true
//     },
//     plugins: [
//         new CleanWebpackPlugin({
//             cleanOnceBeforeBuildPatterns: [
//                 path.resolve(__dirname, 'public/css/*'),
//                 path.resolve(__dirname, 'public/js/*')
//             ],
//         }),
//         new MiniCssExtractPlugin({
//             filename: '../css/[name].[contenthash].css',
//             clean: true
//         }),
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'resources/templates/index.html'), // Path to your HTML template
//             filename: path.resolve(__dirname, 'public/index.html'), // Output file
//             inject: 'body' // Inject JS at the end of the body
//         }),
//     ],
//     devServer: {
//         headers: {
//             'Cache-Control': 'no-store',
//         },
//         static: [
//             {
//                 directory: path.resolve(__dirname, 'public/css/'),
//             },
//             {
//                 directory: path.resolve(__dirname, 'public/js/'),
//             },
//             {
//                 directory: path.resolve(__dirname, 'resources/templates'),
//             }
//         ],
//         port: 3000,
//         open: true,
//         hot: true,
//         compress: true,
//         historyApiFallback: true,
//     },
//     watchOptions: {
//         ignored: /node_modules/,
//         poll: 1000,
//     },
// };


const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'resources/ts/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "resources/css"),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.[contenthash].js', // JS files with content hash for cache busting
        clean: true, // Clean the output directory before each build
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // CSS files with content hash for cache busting
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'resources/templates/index.html'), // Path to the custom template
            filename: 'index.html', // Output file will be in the `public` folder
            inject: 'body', // Inject JS files at the end of the body tag
        }),
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
};
