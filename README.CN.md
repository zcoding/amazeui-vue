# amazeui-vue
基于[vue.js](https://github.com/vuejs/vue)和[amazeui](https://github.com/amazeui/amazeui)开发的组件库。

[![版本](https://img.shields.io/npm/v/amazeui-vue.svg?style=flat-square "版本")](https://www.npmjs.com/package/amazeui-vue)
[![协议](https://img.shields.io/npm/l/amazeui-vue.svg?style=flat-square "协议")](./LICENSE)

## 安装
### NPM
`npm install amazeui-vue`

推荐使用 vuejs + webpack + amazeui-vue

### 全局使用
dist目录下有一个打包好的文件，用script标签引入即可使用

```html
<body>
  <!-- Hello world! -->
  <!-- 记得引入vue.js库和AmazeUI的样式文件 -->
  <link rel="stylesheet" href="path/to/amazeui.css">
  <script src="path/to/vue.js"></script>
  <!-- 然后引入amazeui-vue.js -->
  <script src="path/to/amazeui-vue.js"></script>
  <script>
  // 注意：像使用vue插件一样先调用use方法
  Vue.use(amazeuiVue);
  // 然后就可以正常使用了
  </script>
</body>
```

## 关于
这个项目将AmazeUI的组件（以及部分插件）转成了vue.js组件形式，并且移除了jQuery依赖。

如果你对vue.js还不熟悉，可以在[vue.js官网](http://cn.vuejs.org/)了解和学习。

如果你想使用React版本，[这里](https://github.com/amazeui/amazeui-react)有，而且这个版本由AmazeUI团队维护。

## 依赖
+ [vue.js](https://github.com/vuejs/vue) ^1.0.7

[Vue.js 1.0.0发布啦！](http://vuejs.org/2015/10/26/1.0.0-release/) Amazeui-vue现在使用的vue.js版本是1.0.7，如果你正在将自己的vue.js项目从0.12升级到1.0，从[这里](./vue.js-0.12vs1.0.md)可以了解一些升级带来的重要改变。

## 文档
+ [English](./README.md)

## 运行例子

*__更新__*

现在的例子使用`webpack-dev-server`来跑，而且支持hot-reload，你要做的就是运行`npm run dev`然后打开浏览器，访问`http://localhost:9999`

## 目前可以使用的组件
+ `grid`
+ `column`
+ `container`
+ `amButton`
+ `buttonGroup`
+ `amForm`
+ `amInput`
+ `checkbox`
+ `radio`
+ `amSelect`
+ `panel`
+ `list`
+ `modal`
+ `alert`
+ `confirm`
+ `prompt`
+ `icon`
+ `badge`
+ `pagination`
+ `article`
+ `tab`
+ `topbar`

## 还在开发中的组件
+ `dateTimePicker`
+ `slider`
+ `nprogress`

## 如何使用
vue.js组件系统要求使用组件前必须先注册，安装amazeui-vue并不会将组件注册到你的项目中，所以你必须手动注册。

```javascript
Vue.use(require('amazeui-vue'));
```

然后就可以在全局范围内使用组件了。

## 组件
请查看例子
