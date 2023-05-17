const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'playground/src/index.html'),
    filename: './index.html',
});

module.exports = {
    entry: path.join(__dirname, 'playground/src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                type: 'asset/resource',
                test: /\.(woff(2)?|ttf|gif|png|jpe?g|svg)(\?v=\d+\.\d+\.\d+)?$/,
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3001,
    },
    devtool: 'source-map',
};
