const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'styles-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [
                'styles-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: path.resolve(__dirname, './postcss.config.js')
                        }
                    }
                },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
    ],
})