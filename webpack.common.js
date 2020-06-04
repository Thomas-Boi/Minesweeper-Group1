const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
	MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
    srcPath = path.resolve(__dirname, "src"),
    publicPath = path.resolve(__dirname, "public");

module.exports = {
    entry: {
        minesweeper: path.resolve(srcPath, "js", "minesweeper.js"),
        won: path.resolve(srcPath, "js", "won.js"),
        lost: path.resolve(srcPath, "js", "lost.js")
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
						loader: MiniCSSExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(svg|jpe?g|png|gif)$/i,
                use: [
					{
                        loader: "file-loader",
                        options: {
							name: "[name].[ext]",
							outputPath: "Images"
                        }
					}
				]
            },
            {
                test: /\.ttf$/i,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            esModule: false,
							outputPath: "Fonts"
                        }
                    }
                ]
            },
            {
                test: /\.mp3$/i,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
							esModule: false,
							outputPath: "Audio"
                        }
                    }
                ]
            }

        ]
    },
    output: {
        filename: "js/[name].js",
        path: publicPath
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: path.resolve(publicPath, "index.html"),
			template: path.resolve(srcPath, "index.html"),
			inject: false
        }),
        new HTMLWebpackPlugin({
            filename: path.resolve(publicPath, "won.html"),
            template: path.resolve(srcPath, "won.html"),
            inject: false
        }),
        new HTMLWebpackPlugin({
            filename: path.resolve(publicPath, "lost.html"),
            template: path.resolve(srcPath, "lost.html"),
            inject: false
        }),
	]
};