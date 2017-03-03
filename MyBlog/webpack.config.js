var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
    entry: './index.js',
    plugins:[],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module:{
        loaders:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['es2015', 'react']
            }
        },{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },{
            test:/\.jpg|png|gif$/,
            loader:'file-loader'
        }
        ]
    },
};

if(env === 'production'){
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

module.exports = config;

