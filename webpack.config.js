const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
    entry:{
      index:'./index.js'
    },
    mode:'development',
    output:{
      path:path.resolve('./public')
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1, minimize: true },
            }
          ]
        }
      ]
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./temp.ejs'),
        chunks:['index'],
        inject: true,
        hash: true
      })
    ]

}
