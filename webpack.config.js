const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'eval-source-map', //配置调试
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js' ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '贪吃蛇',
            template: './src/index.html'
        })
    ]
};