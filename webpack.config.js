const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
        from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        to: 'webcomponents-loader.js',
        toType: 'file'
      },
      {
        from: './node_modules/@webcomponents/webcomponentsjs/bundles',
        to: 'bundles',
        toType: 'dir'
      },
      {
        from: './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
        to: 'custom-elements-es5-adapter.js',
        toType: 'file'
      }
    ]),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    })
  ]
}