module.exports = {
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
    }

}
