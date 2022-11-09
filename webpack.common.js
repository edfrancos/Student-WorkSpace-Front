const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	module: {
		rules: [
			{ test: /\.html$/, use: ['html-loader'] },
			{
				test: /\.(svg|png|jpe?g|gif|webp)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					},
				},
			},
		],
	},
};
