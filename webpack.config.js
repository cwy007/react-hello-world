var webpack = require('webpack');
var path = require('path');
var App_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');
var config = {
  entry: App_DIR + '/index.jsx', // 入口
  output: {
    path: BUILD_DIR,       // 出口路径
    filename: 'bundle.js'  // 出口文件名
  }
};

module.exports = config;
