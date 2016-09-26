const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = __dirname;

const config = {
  entry: './src/entryPoint.js',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(ROOT_PATH, 'src'),
        loader: 'babel-loader!eslint',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT_PATH, 'src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.NoErrorsPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(ROOT_PATH, 'dist'),
  },
};

module.exports = config;
