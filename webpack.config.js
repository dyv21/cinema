const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    hot: false,
    port: 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: 'public'}]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
};
