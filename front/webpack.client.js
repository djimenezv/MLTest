const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/client/client.js'],
    mode: "development",
    devtool: 'source-map',
    
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets:{browsers: ['last 2 versions'] }}]
                    ]
                }
            },
            {
                test: /\.less$/, // [D]
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                        },
                    },
                    'less-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'bundle.css',
        }),
    ],

};