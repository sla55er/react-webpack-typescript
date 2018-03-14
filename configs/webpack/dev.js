const merge = require('webpack-merge');
const common = require('./common.js');
const {resolve} = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
	  contentBase: resolve(__dirname, '../../dist')
  }
});
