const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        // use: [
        //   'style-loader',
        //   'css-loader',
        // ],
        exclude: '/node-modules/',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? false : 'eval-sourcemap';
  console.log(options);
  
  return conf;
};