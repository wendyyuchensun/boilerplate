'use strict'

const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
          ],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },
  mode: 'none',
}
