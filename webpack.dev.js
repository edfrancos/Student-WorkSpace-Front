const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/template.html',
		}),
	],
	module: { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
});
