const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const cssMinimizerPlugin = new CssMinimizerPlugin();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    title: 'Daniel Dahlman Portfolio',
    template: path.resolve(__dirname, './src/template.ejs'),
    filename: './index.html',
});

/* const bundleAnalyzer = new BundleAnalyzerPlugin(); */

const ReactRefresh = new ReactRefreshWebpackPlugin();

module.exports = {
    entry: [
        'core-js/modules/es.promise',
        'core-js/modules/es.array.iterator',
        path.resolve(__dirname, './src/index.js'),
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
        minimizer: ['...', cssMinimizerPlugin],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require('react-refresh/babel'),
                        ].filter(Boolean),
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        /* bundleAnalyzer,  */
        isDevelopment && ReactRefresh,
    ].filter(Boolean),
};
