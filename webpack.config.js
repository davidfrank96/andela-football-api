var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/, use: ['babel-loader', 'eslint-loader']
        },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader',], },]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};