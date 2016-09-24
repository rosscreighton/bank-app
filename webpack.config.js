const path = require('path');

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
  output: {
    filename: "bundle.js",
    path: path.join(ROOT_PATH, 'dist')
  },
};

module.exports = config;
