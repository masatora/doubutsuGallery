/*
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `./index.html`,
  filename: 'index.html'
});
*/
var path = require('path');
var webpack = require('webpack');
var progressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        //test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        //loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new progressBarPlugin()
  ]
//  plugins: [HTMLWebpackPluginConfig],
};
