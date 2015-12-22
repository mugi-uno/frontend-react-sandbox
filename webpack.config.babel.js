var path = require("path");
var webpack = require("webpack");
var babel = require('babel-core/register');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry : [
    "./javascripts/entry",
    "./stylesheets/sample.scss",
  ],

  output: {
    path : __dirname,
    filename : "dist/app.js"
  },

  resolve : {
    root: [
      path.join(__dirname, "javascripts"),
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "stylesheets"),
    ],
    extensions: ["", ".js", ".es6", ".jsx", "scss"],
  },

  module: {
    loaders: [
      {
        test: /\.(es6|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('dist/style.css', {
      allChunks : true
    }),
  ],
}
