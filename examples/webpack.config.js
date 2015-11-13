var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, './app/index.js'),

  watch: true,

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
      "amazeui-vue": path.resolve(__dirname, '../src'),
      "views": path.resolve(__dirname, './app/views')
    }
  }

};
