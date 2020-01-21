const path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        minesweeper: path.resolve(__dirname, "src/js/minesweeper.js"),
        won: path.resolve(__dirname, "src/js/won.js"),
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
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {
                                publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./css/admin/main.css the publicPath will be ../../
                                // while for ./css/main.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/js")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin()
    ],
}