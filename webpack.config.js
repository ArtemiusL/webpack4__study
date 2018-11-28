const path = require('path');

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
};

module.exports = conf;