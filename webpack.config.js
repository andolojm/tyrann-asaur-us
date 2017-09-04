var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackOnBuildPlugin = require("on-build-webpack");
var webpack = require("webpack");
var exec = require("child_process").exec;
var fs = require("fs");
var path = require("path");

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
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(pdf|jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js/,
      uglifyOptions: {
        ie8: true,
      }
    }),
    new WebpackOnBuildPlugin(stats => {
        console.log('Build done. TODO do things on webpack build');
    })
  ]
};
