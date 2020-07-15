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

npm install css-loader style-loader -D
```

getDerivedStateFromProps() 在组件挂载时，以及每当props更新时被触发，用于在props更改时
更新组件的状态，返回的对象将会与当前的状态合并。

组件的数据更新会经历下面几个过程：

```js
static getDerivedStateFromProps()
shouldComponentUpdate()
componentWillUpdate/UNSAFE_componentWillUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
```

React组件生命周期流程图

![React组件生命周期流程图](https://tva1.sinaimg.cn/large/007S8ZIlly1ggr0clk19fj30m80cadg7.jpg)
