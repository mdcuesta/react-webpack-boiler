var webpack = require('webpack');
var path = require('path');

var appPath = path.join(__dirname, 'scripts');
var outputPath = path.join(__dirname, 'wwwroot','js');

module.exports = [{
  entry: {
    index: appPath + '/index.jsx',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        compact: false,
        plugins: ['transform-runtime']
      },    
    }]     
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
}]