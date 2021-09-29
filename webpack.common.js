const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */
const autoprefixer = require('autoprefixer');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    title: 'Daniel Dahlman Portfolio',
    template: path.resolve(__dirname, './src/template.ejs'),
    filename: './index.html',
});

/* const bundleAnalyzer = new BundleAnalyzerPlugin(); */

const autoprefixerPlugin = new webpack.LoaderOptionsPlugin({
    options: {
        postcss: [autoprefixer()],
    },
});

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
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
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
                test: /\.(css|scss)/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64]',
                            },
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{ loader: 'file-loader?name=fonts/[name].[hash].[ext]' }],
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        /* bundleAnalyzer,  */ autoprefixerPlugin,
        isDevelopment && ReactRefresh,
    ].filter(Boolean),
};
