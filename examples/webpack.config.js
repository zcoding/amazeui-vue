var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
    app: path.resolve(__dirname, './app/index.js'),
    vendor: ["vue"]
  },

  watch: true,

  output: {
    path: path.resolve(__dirname, './public/app'),
    publicPath: "/app/",
    filename: "app.js"
  },

  module: {
    loaders: [
      {
          test: /\.vue$/
        , loader: 'vue'
      },
      {
          test: /\.js$/
        , exclude: /node_modules/
        , loader: "babel"
        , query: {
            presets: ['es2015']
          , plugins: ['transform-runtime']
        }
      }
    ]
  },

  vue: {
    autoprefixer: false,
    loaders: {
      // html: 'vue-html?removeRedundantAttributes=false'
    }
  },

  resolve: {
    alias: {
      "amazeui-vue": path.resolve(__dirname, '..'),
      "views": path.resolve(__dirname, './app/views')
    }
  },

  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]

};
