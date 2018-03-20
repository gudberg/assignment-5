const path = require('path');


module.exports = {
    entry: './src/components/index.js',
    output: path.resolve(__dirname, '../dist'),
     filename: 'index.js', 
     libraryTarget: 'umd',
     library: 'ReactComponentNpm'
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            
        }

    ]

}