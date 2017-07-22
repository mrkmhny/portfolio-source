const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
<<<<<<< HEAD
    './render.js',
=======
    './main.js',
>>>>>>> origin/master
    'webpack-hot-middleware/client',
    './style.scss'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.js|.jsx?$/,
=======
        test: /\.js$/,
>>>>>>> origin/master
        exclude: /node_modules/,
        loaders: [
          "react-hot-loader",
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
          }, {
          loader: "css-loader" // translates CSS into CommonJS
          }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
<<<<<<< HEAD
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader",
          'image-webpack-loader',
        ],
      },
=======
>>>>>>> origin/master
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
