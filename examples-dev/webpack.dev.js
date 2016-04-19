var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    app: path.resolve(__dirname, './src/index.js'),
    vendor: ["vue"]
  },

  output: {
    path: path.resolve(__dirname, './app'),
    publicPath: "/app/",
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  vue: {
    loaders: {
      html: 'vue-html?removeRedundantAttributes=false'
    }
  },

  resolve: {
    alias: {
      "amazeui-vue": path.resolve(__dirname, '..'),
      "views": path.resolve(__dirname, './src/views')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vue.js")
  ],

  devtool: "#inline-source-map"

};
