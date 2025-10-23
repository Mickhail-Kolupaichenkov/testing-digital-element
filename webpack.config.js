const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа - твой main.js в корне
  entry: './main.js',
  
  // Куда складывать результат
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Настройки dev-сервера
  devServer: {
    static: './',
    hot: true,
    port: 3000,
    open: true
  },

  // Модули и loaders
  module: {
    rules: [
      // SCSS/CSS loader
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ],
      },
      // CSS loader для reset.css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Обработка изображений
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ],
  },

  // Плагины
  plugins: [
    // Плагин для HTML (index.html в корне)
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],

  mode: 'development'
};