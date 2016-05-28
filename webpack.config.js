const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    javascript: './src/scripts/app.js'
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  // Configuration for dev server
  devServer: {
    contentBase: 'public',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
  // http://webpack.github.io/docs/configuration.html#resolve-extensions
  //resolve: {
    //extensions: ['', '.js', '.jsx']
  //}
};
