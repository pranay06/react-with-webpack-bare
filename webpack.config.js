// This module is used to at places where a path has to be created
//or any operation related to path
const path = require ("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

//This module.exports is going to be consumed by webpack npm module when it is going to be used to build the project. Each property of module.exports is named as desired by its consumer - the webpack module.
module.exports = {
    //value of the entry key should be the exact javascript file
    //from where webpack is supposed to start the bundling.
    entry: path.resolve(__dirname,"src","index.js"),

    //value of the output key should be the exact javascript file
    //where bundled javascript has to be written
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", 
            template: "src/index.html"
        }), //we can and we should omit including bundle.js in index.html present in src directory as it will be handled by this plugin
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        //compress: true,
        port: 9000
    }
}