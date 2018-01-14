var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackOnBuildPlugin = require("on-build-webpack");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    filename: "[name].js",
    path: __dirname + '/dist/'
  },
  entry: {
    index: "./app/js/index.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.*(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(pdf|jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js/,
      uglifyOptions: {
        ie8: true,
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Jeff Andolora',
      template: 'app/index.html'
    }),
    new WebpackOnBuildPlugin(stats => {
        console.log('Build done. TODO do things on webpack build');
    })
  ]
};
