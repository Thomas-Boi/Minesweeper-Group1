const merge = require("webpack-merge"),
	TerserJSPlugin = require('terser-webpack-plugin'),
	OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
	common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimizer: [new TerserJSPlugin(), new OptimizeCSSPlugin()]
	}
});