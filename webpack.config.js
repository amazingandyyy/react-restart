const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
    ]
}