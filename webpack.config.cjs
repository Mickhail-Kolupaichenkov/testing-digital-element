const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './main.js',
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true,
      publicPath: '/'
    },

    devServer: {
      static: './dist',
      hot: true,
      port: 3006,
      open: true,
      compress: true
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader', 
            'sass-loader'
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext][query]'
          }
        },
        {
          test: /\.(otf|ttf|woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]'
          }
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        minify: isProduction,
        inject: true
      }),
      new CopyWebpackPlugin({ 
        patterns: [
          {
            from: 'public/images',
            to: 'images',
            noErrorOnMissing: true
          }
        ]
      })
    ],

    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
      ],
    },

    mode: argv.mode || 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  };
};