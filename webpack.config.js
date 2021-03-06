'use strict';

const CommonsChunkPlugin   = require('webpack/lib/optimize/CommonsChunkPlugin');
const DedupePlugin         = require('webpack/lib/optimize/DedupePlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/main.js',
    polyfills: './src/polyfills.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-to-string-loader!css-loader'
      },
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new DedupePlugin(),
    new OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    }),
    new CommonsChunkPlugin({
      name: ['polyfills', 'main'].reverse()
    }),
  ]
};
