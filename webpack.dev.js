const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true,
    },
});
