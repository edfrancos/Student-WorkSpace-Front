const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		assetModuleFilename: 'img/[name]-[hash].[ext]',
	},
	module: {
		rules: [{ test: /\.html$/, loader: 'html-loader' }],
	},
};
