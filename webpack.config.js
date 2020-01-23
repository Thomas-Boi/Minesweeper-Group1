const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin');
    MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
    HTMLWebpackTagsPlugin = require('html-webpack-tags-plugin');

const srcPath = path.resolve(__dirname, "src"),
    publicPath = path.resolve(__dirname, "public");

module.exports = {
    entry: {
        minesweeper: path.resolve(srcPath, "js", "minesweeper.js")
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
                        loader: MiniCSSExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|ttf|mp3)$/i,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            esModule: false
                        }
                    }
                ]
            }

        ]
    },
    output: {
        filename: "[name].js",
        path: publicPath,
        publicPath: publicPath
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: path.resolve(publicPath, "index.html"),
            template: path.resolve(srcPath, "index.html")
        }),
    ]
    
};