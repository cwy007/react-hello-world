var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var App_DIR = path.resolve(__dirname, 'src');     // 项目路径
var BUILD_DIR = path.resolve(__dirname, 'dist');  // 输出路径
var config = {
  entry: App_DIR + '/index.jsx', // 项目入口
  output: {
    path: BUILD_DIR,             // 输出路径
    filename: 'bundle.js'        // 输出文件命名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // 编译后缀为 js 和 jsx 格式文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"  // 使用 babel-loader 这个 loader 库
        }
      },
      {
        test: /\.css$/,  // 只加载 .css 文件
        loader: 'style-loader!css-loader'  // 同时运行两个loader
      }
    ]
  },
  devServer: {  // 在开发模式下，提供虚拟服务器用于项目开发和测试
    port: 3000,
    contentBase: "./dist"
  },
  plugins: [   // 拓展Webpack功能
    new HtmlWebpackPlugin({  // 生成HTML文件
      template: "index.html",
      // favicon: "favicon.ico",
      inject: true,
      sourceMap: true,
      chunksSortMode: "auto"
    }),
    new CleanWebpackPlugin()  // 清除文件
  ]
};

module.exports = config;
