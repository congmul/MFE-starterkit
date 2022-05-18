const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        loginService: 'loginService@http://localhost:3002/remoteEntry.js',
      },
     shared: [ 
      {
        react: {
        singleton: true,
        requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      }
    ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};