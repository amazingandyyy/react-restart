const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin(path.resolve(__dirname,'dist/styles/[name].css'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: "[name].js"
    },
    devtool: "source-map", 
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },'sass-loader'],
                })
            }
        ]
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')}),
        extractCSS
    ]
}