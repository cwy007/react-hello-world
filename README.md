# webpack-based react hello world

```bash
npm init -y
-y 创建package.json时使用默认值

npm i webpack webpack-cli -D
-D, --save-dev
-S, --save

./node_modules/.bin/webpack -d
-d           shortcut for --debug --devtool eval-cheap-module-source-map

browser-sync start --server --browser "Google Chrome" --files "stylesheets/*.css, *.html, **/*.js"

npm install -D babel-core babel-loader@7 babel-preset-env babel-preset-react

npm install -S react react-dom

./node_modules/.bin/webpack -d --watch
监听文件变化，自动执行编译命令

npm install webpack-dev-server -D

npm install html-webpack-plugin clean-webpack-plugin -D

```

WebSocket 是基于 TCP 的全双工通信协议。

## ch02

```bash
npm install events -S
```
