var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, './app/index.js'),

  output: {
    path: path.resolve(__dirname, './public/app'),
    publicPath: "/app/",
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' }
    ]
  },

  vue: {
    autoprefixer: false,
    loaders: {}
  },

  babel: {
    nonStandard: false
  },

  resolve: {
    alias: {
      amaze: path.resolve(__dirname, '../src'),
      views: path.resolve(__dirname, './app/views')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};
