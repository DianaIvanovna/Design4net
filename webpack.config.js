const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // добавили плагин
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const isDev = process.env.NODE_ENV === 'development';
// создаем переменную для development-сборки
module.exports = {
  entry: {
    main: './src/index.js',
    reconstructionStub: './src/pages/reconstructionStub/reconstructionStub.js',
    developmentStud: './src/pages/developmentStud/developmentStud.js',
    promotion: "./src/pages/promotion/promotion.js",
    technicalSupport: "./src/pages/technicalSupport/technicalSupport.js",
    commercialOffer: "./src/pages/commercialOffer/commercialOffer.js",
    websiteDevelopment: "./src/pages/websiteDevelopment/websiteDevelopment.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/reconstructionStub/reconstructionStub.html',
      filename: 'reconstructionStub.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/developmentStud/developmentStud.html',
      filename: 'developmentStud.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/promotion/promotion.html',
      filename: 'promotion.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/technicalSupport/technicalSupport.html',
      filename: 'technicalSupport.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/commercialOffer/commercialOffer.html',
      filename: 'commercialOffer.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/websiteDevelopment/websiteDevelopment.html',
      filename: 'websiteDevelopment.html',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
