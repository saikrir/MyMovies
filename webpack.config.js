module.exports = {
	entry: [
		'./src/client/index.jsx'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'app.bundle.js'
	},
	devServer: {
		contentBase: './dist'
	}
};
