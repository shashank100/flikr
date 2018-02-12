const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        publicPath: '/'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src")
        },
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            },
            {
                test: /\.scss?$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    }

};
