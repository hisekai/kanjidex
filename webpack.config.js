const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    background: "./src/background.js",
    content: "./src/content.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "node_modules/tippy.js/dist/tippy.css",
        to: "static/tooltip/tippy.css",
      },
      { from: "src/themes/kanjidex.css", to: "static/tooltip/kanjidex.css" },
      {
        from: "node_modules/tippy.js/dist/tippy-bundle.umd.js",
        to: "static/tooltip",
      },
      {
        from: "node_modules/@popperjs/core/dist/umd/popper.min.js",
        to: "static/tooltip",
      },
    ]),
  ],
  performance: {
    hints: false,
  },
};
