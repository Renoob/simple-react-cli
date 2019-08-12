const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../node_modules'),
			"node_modules"
        ],
        alias: {
            src: path.resolve(__dirname, '../src'),
            FONTS: 'src/fonts',
			ASSETS: 'src/assets',
			COMPONENTS: 'src/components',
			CONTAINERS: 'src/containers',
			MOCK: 'src/mock',
			MODULES: 'src/modules',
			ROUTER: 'src/router',
			STORE: 'src/store',
			STYLES: 'src/styles',
			UTILS: 'src/utils'
		},
		extensions: [ '.html', '.js', '.jsx', '.css', '.scss', '.less', '.json' ] //自动解析的扩展
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, '../src'),
            exclude: [/node_modules/],
            loader: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets',
                    publicPath: '../assets'
                }
            }]
        }, {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts',
                    publicPath: '../fonts'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../views/index.html')
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        // 清除无用 css
        new PurifyCSS({
            paths: glob.sync([
                // 要做 CSS Tree Shaking 的路径文件
                path.resolve(__dirname, '../views/*.html'),
                path.resolve(__dirname, '../src/*.js')
            ])
        })
    ]
}