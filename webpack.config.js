module.exports = {
    entry: __dirname + '/src/App.js',
    devtool: 'source-maps',
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:3]'
                        }
                    },
                    {loader: 'scss-loader'},
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
}