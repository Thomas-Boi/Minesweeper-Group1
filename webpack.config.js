const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, "src"),
    publicPath = path.resolve(__dirname, "public");

module.exports = {
    entry: {
        minesweeper: path.resolve(srcPath, "js", "minesweeper.js")
    },
    module: {
        noParse: /(Fonts|Images|Audio)/,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/register"
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
                    {
                        loader: "css-loader"
                    }
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
                            name: "[name].[ext]"
                        }
                    }
                ]
            }

        ]
    },
    output: {
        filename: "[name].js",
        path: publicPath
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