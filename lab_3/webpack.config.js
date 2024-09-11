const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `[name].bundle.js`,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Особистий блог",
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Розклад",
      template: path.resolve(__dirname, "./src/pages/rozklad.html"),
      filename: "rozklad.html",
    }),
    new HtmlWebpackPlugin({
      title: "Фотоальбом",
      template: path.resolve(__dirname, "./src/pages/photo.html"),
      filename: "photo.html",
    }),
    new HtmlWebpackPlugin({
      title: "Останні новини",
      template: path.resolve(__dirname, "./src/pages/news.html"),
      filename: "news.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
  devServer: {
    port: 8080,
  },
};
