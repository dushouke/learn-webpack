var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
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
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]

};