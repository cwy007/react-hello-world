var webpack = require('webpack');
var path = require('path');
var App_DIR = path.resolve(__dirname, 'src');     // 项目路径
var BUILD_DIR = path.resolve(__dirname, 'build'); // 构建路径
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
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./build"
  }
};

module.exports = config;
