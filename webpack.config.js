
const resolve = require('path').resolve;

module.exports = {
  context: resolve(__dirname, './'),
  entry: {
    app: resolve(__dirname, './src/app.js'),
    vendors: ['angular']
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, './dist'),
    sourceMapFilename: '[name].bundle.map'
  },
  devtool: 'source-map',
  resolve: {
		extensions: ['.js']
	},
  module: {
		loaders: [{
			test: /\.js/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}, {
			test: /\.html/,
			exclude: /node_modules/,
			loaders: ['html-loader']
		}]
  },
  target: 'web',
  watch: true,
  stats: 'errors-only'
};
