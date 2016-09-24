const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = __dirname;

const config = {
  entry: './src/entryPoint.js',
  module: {
    loaders: [
      {
        test: /\.js?$/, include: path.join(ROOT_PATH, 'src'), loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT_PATH + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.join(ROOT_PATH, 'dist')
  },
};

module.exports = config;
