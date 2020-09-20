module.exports = {
    entry: './src/app.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { 
                test: /\.(js|mjs|jsx|ts|tsx)$/, 
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ]
    },    
}