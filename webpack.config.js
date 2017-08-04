const path = require('path');
const webpack = require('webpack');

const { NODE_ENV: env = 'development' } = process.env;

const entry = [
  './render.js',
  './main.js',
  './style.scss'
];

if (env === 'development') {
  entry.push('webpack-hot-middleware/client');
}

const plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: env
  }),
  new webpack.NoEmitOnErrorsPlugin()
];

if (env === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (env === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  context: path.join(__dirname, 'src'),
  entry,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        test: /\.js$/,
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader",
          'image-webpack-loader',
        ],
      },
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
  plugins
};
