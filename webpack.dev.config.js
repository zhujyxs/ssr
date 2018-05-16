var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    debug: false,

    entry: {
        main: ['./src/main'],
        vendor: ['react', 'react-dom', 'react-router', 'babel-polyfill', 'redux', 'react-redux']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '/[name].bundle.js',
        chunkFilename: '/[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
        ]
    },

    plugins: [

        new ExtractTextPlugin('/main.css'),

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('production'),
                NODE_ENV: JSON.stringify('production')
            },
            '__NODE__': JSON.stringify(true),
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor',
            minChunks: Infinity
        }),

        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
    ],

};