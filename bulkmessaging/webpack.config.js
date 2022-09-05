const path = require("path");
const webpack = require("webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/bulkmessaging"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         sourceMap: true,
                    //     },
                    // },
                    {
                        loader: "babel-loader",
                    },
                    // {
                    //     loader: "style-loader",
                    // },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("development"),
            },
        }),
        new SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"],
    },
};
