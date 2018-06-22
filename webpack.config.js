const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
	context: path.resolve(__dirname, "assets/src"),
	entry: {
		scripts: './scripts/app.js',
		vendors: './scripts/vendors.js',
		styles: './styles/app.scss'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /assets/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['env']
					}
				}
			},

			{
				test: /\.scss$/,
				include: /styles/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				],
			},

			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './assets/images/'
						}
					}
				]
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './assets/fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['assets/dist'])
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'assets/dist'),
		filename: './scripts/[name].bundle.js'
	},
	devtool: 'inline-source-map'
};
module.exports = config;