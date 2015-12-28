var path = require("path");
var webpack = require("webpack");
var babel = require('babel-core/register');
var file = require('file');
var jade = require('jade');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlSources = [];
file.walkSync(__dirname + "/html", (dirPath, dirs, files) => {
  htmlSources.push(...(
    files.map((f) => path.relative(__dirname, path.normalize(path.join(dirPath, f))))
  ));
});

var jadeFiles = htmlSources.filter((f) => /\.jade$/.test(f)).map((f) => "./" + f);

var jadeEntries = [...jadeFiles];
var jadePlugins = jadeFiles
  .map((f) => new HtmlWebpackPlugin({
    filename: path.relative(path.normalize('./html'), path.join(path.dirname(f), path.basename(f, ".jade") + ".html")),
    templateContent: jade.compileFile(f)(),
  }));

module.exports = {
  entry : [
    "./javascripts/entry",
    "./stylesheets/entry.scss",
    ...jadeEntries
  ],

  output: {
    path : __dirname + "/public",
    filename : "dist/app.js"
  },

  resolve : {
    root: [
      path.join(__dirname, "javascripts"),
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "stylesheets"),
    ],
    extensions: ["", ".js", ".es6", ".jsx", "scss", ],
  },

  module: {
    loaders: [
      { test: /\.(es6|jsx)?$/, exclude: /(node_modules)/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.jade/, loader: 'jade' },
      { test: /\.scss/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },

  plugins: [
    new ExtractTextPlugin('dist/style.css', {
      allChunks : true
    }),
    ...jadePlugins
  ],
}
