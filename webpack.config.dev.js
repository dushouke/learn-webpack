var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8073',
        'webpack/hot/dev-server',
        "./entry"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" }
            { test: /\.css$/, loader: ["style", "css"] }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    }

};