const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
};
