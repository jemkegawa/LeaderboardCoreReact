const path = require('path');

module.exports = {
   mode: 'development',
   entry: { 'main': './wwwroot/main.js' },
   output: {
      path: path.resolve(__dirname, 'wwwroot/dist'),
      filename: 'bundle.js',
      publicPath: 'dist/'
   },
   module: {
        rules: [
            /*{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
                    }
                }
            },*/
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
   }
};
