const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { workerData } = require('worker_threads');

module.exports = {
    entry: {
        index: './src/index.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'QR Scanner JV',
        }),
       new WorkboxPlugin.GenerateSW({
         clientsClaim: true,
         skipWaiting: true,
       }),
       new WorkboxPlugin.InjectManifest({
        swSrc: './src/sw.js',
      }),
      new WebpackPwaManifest({
        name: 'QR Scanner - Jens Vanderstraeten',
        short_name: 'QR-JV',
        description: 'Fast and free to use QR code scanner!',
        background_color: '#00FCAD',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        publicPath: './',
        icons: [
          {
            src: path.resolve('./src/assets/logo-512.png'),
            sizes: [48, 72, 96, 144, 168, 192, 229, 512] // multiple sizes
          },
          {
            src: path.resolve('./src/assets/logo.png'),
            size: '1024x1024' // you can also use the specifications pattern
          },
          {
            src: path.resolve('./src/assets/logo.png'),
            size: '1024x1024',
            purpose: 'maskable'
          }
        ]
      })    
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};