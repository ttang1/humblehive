const path = require('path');

module.exports = {
    target: "electron-renderer",
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".jsx"
        ]
    },
    entry: {
        app: "./src/index.tsx", // react application
        main: "./src/main.ts" // main electron 
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    "svg-url-loader"
                ]
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};