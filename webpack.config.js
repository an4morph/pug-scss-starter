const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  entry: [
    './src/scripts/index.js',
    './src/styles/index.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.(eot|woff|woff2|svg|ttf|gif|png)([\?]?.*)$/, loader: "file-loader" },
      { test: /\.pug$/, use: 'pug-loader' },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/pug/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pug/test.pug',
      filename: 'test.html',
    })
  ],
}