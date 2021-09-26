const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

module.exports = merge(webpackCommon, {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        historyApiFallback: true,
        compress: true,
    },
});
