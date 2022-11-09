const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'main.[contentHash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new htmlWebpackPlugin({
				template: './src/template.html',
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
		],
	},
	plugin: [
		new miniCssExtractPlugin({
			filename: '[name].[contentHash].css',
		}),
		new cleanWebpackPlugin(),
	],
	module: {
		test: /\.scss$/,
		use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	},
});
