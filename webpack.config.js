module.exports = {
    entry: "./src/js/index.jsx",
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    module:
    {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}