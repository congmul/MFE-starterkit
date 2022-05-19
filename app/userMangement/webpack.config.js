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
    port: 3003,
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
      name: 'userManagement',
      filename: 'remoteEntry.js',
      exposes: {
        './UserManagement': './src/app.tsx',
        './UserAvatar': './src/components/Avatar/Avatar.tsx'
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