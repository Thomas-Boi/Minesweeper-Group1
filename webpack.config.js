const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, "src"),
    publicPath = path.resolve(__dirname, "public");

module.exports = {
    entry: {
        minesweeper: path.resolve(srcPath, "js/minesweeper.js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: path.resolve(publicPath, "Images")
                    }
                }
            },
            {
                test: /\.ttf$/i,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: path.resolve(publicPath, "Fonts")
                    }
                }
            },
            {
                test: /\.mp3$/i,
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: publicPath + "/Audio"
                    }
                }
            }

        ]
    },
    output: {
        filename: "[name].js",
        path: publicPath
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: path.resolve(publicPath, "index.html"),
            template: path.resolve(srcPath, "index.html")
        })
    ]
    
};