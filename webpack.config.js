const PATH = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

console.log(global)
const PATHS = {
  source: PATH.join(__dirname, 'src/js'),
  build: PATH.join(__dirname, 'build/js')
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV.trim() === 'development';
console.log(isDevelopment)
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'source-map' : 'source-map',
  context: PATHS.source,
  entry: {
    index: './index.js',
  },

  output: {
    filename: 'main.js',
    path: PATHS.source,
  },

  plugins: [
    new CaseSensitivePathsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
};
