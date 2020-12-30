const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const rootPath = path.resolve(__dirname, "source");
const nodeModulesPath = path.resolve(__dirname, "node_modules");

module.exports = {
  context: rootPath,
  mode: "development",
  entry: {
    createjs: path.join(nodeModulesPath, "/createjs/builds/createjs-2015.11.26.combined.js"),
    app: path.join(rootPath, "/app.js"),
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: rootPath,
    open: true,
    stats: {
      warnings: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /node_modules(\/|\\)(createjs)(\/|\\).*\.js$/,
        loader: "imports-loader",
        options: {
          additionalCode: "window.createjs = {};",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "CreateJS Boilerplate",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      "@": rootPath,
      "@createjs/EaselJS": path.resolve(rootPath, "createjs"),
      "@createjs": path.resolve(rootPath, "createjs"),
    },
  },
};
