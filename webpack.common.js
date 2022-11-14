const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/ts/index.tsx',
	output: {
		assetModuleFilename: 'img/[name]-[hash].[ext]',
	},
	module: {
		rules: [
			{ test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ },
			{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
};
