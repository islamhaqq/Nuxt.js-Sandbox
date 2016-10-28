module.exports = {
    entry: './src/AppComponent.js',
    output: {
        path: __dirname,
        filename: 'AppComponent-output.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
