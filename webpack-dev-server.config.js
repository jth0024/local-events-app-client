const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./src'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
};
