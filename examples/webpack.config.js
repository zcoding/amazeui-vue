var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, './app/index.js'),

  watch: true,

  output: {
    path: path.resolve(__dirname, './public/'),
    publicPath: "/",
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
  }

};
