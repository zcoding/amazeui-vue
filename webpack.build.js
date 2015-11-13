var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, './src/build.js'),

  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: "/",
    filename: "amazeui-vue.js"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' }
    ]
  },

  vue: {
    autoprefixer: false,
    loaders: {
      html: 'vue-html?removeRedundantAttributes=false'
    }
  },

  babel: {
    nonStandard: false
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
