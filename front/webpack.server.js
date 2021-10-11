const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'build')
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
                test: /\.less$/, // [E]
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportOnlyLocals: true,
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[local]_[hash:base64:5]'
                            },
                        }
                    },
                ]
            }
        ]
    },
    externals: [webpackNodeExternals()]
};

//module.exports = merge(commonConfig, settings);