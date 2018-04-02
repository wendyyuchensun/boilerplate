'use strict'

const path = require('path')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: ['ts-loader'],
      },
    ],
  },
  mode: 'none',
}
