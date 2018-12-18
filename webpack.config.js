const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({ filename: "./dist/css/app.css" });

module.exports = {
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
  },
  entry: {
    app: "./src/js/app.js",
    background: "./src/js/background.js",
    content: "./src/js/content.js",
    vocabulary: "./src/js/vocabulary.js",
    help: "./src/js/help.js"
  },
  output: {
    filename: "js/bundle.js",
    filename: "js/[name].js",
    filename: "js/[name].js",
    filename: "js/[name].js",
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "src", "scss")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
              outputPath: "css/"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].png",
              outputPath: "assets/",
              publicPath: "../assets/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/themes/kanjidex.css", to: "themes/kanjidex.css" },
      { from: "src/js/utils/raphael.min.js", to: "js/utils/raphael.min.js" },
      { from: "src/js/utils/dmak.min.js", to: "js/utils/dmak.min.js" },
      { from: "src/js/utils/dmakLoader.js", to: "js/utils/dmakLoader.js" },
      { from: "src/assets", to: "assets" },
      { from: "src/popup.html", to: "popup.html" },
      { from: "src/vocabulary.html", to: "vocabulary.html" },
      { from: "src/help.html", to: "help.html" },
      { from: "src/manifest.json", to: "manifest.json" }
    ])
  ]
};
