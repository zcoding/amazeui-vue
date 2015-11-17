# amazeui-vue
基于[vue.js](https://github.com/vuejs/vue)和[amazeui](https://github.com/amazeui/amazeui)开发的组件库。

[![版本](https://img.shields.io/npm/v/amazeui-vue.svg?style=flat-square "版本")](https://www.npmjs.com/package/amazeui-vue)
[![协议](https://img.shields.io/npm/l/amazeui-vue.svg?style=flat-square "协议")](./LICENSE)

## 安装
### NPM
`npm install amazeui-vue`

推荐使用 vuejs + webpack + amazeui-vue

### 非模块化
build目录下有一个打包好的非模块化文件，用script标签引入即可使用

```html
<head>
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
</head>
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
先跑 `npm run dev` 然后跑 `npm start`

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

## 还在开发中的组件
+ `dateTimePicker`
+ `slider`
+ `tabs`
+ `topbar`
+ `nprogress`

## 如何使用
vue.js组件系统要求使用组件前必须先注册，安装amazeui-vue并不会将组件注册到你的项目中，所以你必须手动注册。当然，注册方法非常的简单。

你可以把amazeui-vue组件注册到全局或者局部，注意两者的区别：[vue.js: 如何使用组件](http://cn.vuejs.org/guide/components.html#使用组件)。

### 注册到全局
amazeui-vue提供了一个install函数，让你可以像使用vue.js插件一样使用amazeui-vue：
```javascript
Vue.use(require('amazeui-vue/install'));
```
这样amazeui-vue组件就注册到全局，而且他们将会被同步加载。

如果你希望使用[异步组件](http://cn.vuejs.org/guide/components.html#异步组件)，就换成install-async函数：
```javascript
Vue.use(require('amazeui-vue/install-async'));
```

### 局部注册

**_同步加载_**
```javascript
import amButton from 'amazeui-vue/button/am-button.vue'; // 你可能需要babel-loader来兼容ES2015语法
// 或者用CommonJS语法
// var amButton = require('amazeui-vue').button;
// ...
export default {
  components: {
    "amButton": amButton
  }
}
```

**_异步加载_** (使用webpack)
```javascript
export default {
  components: {
    "amButton": function(resolve) {
      require(['amazeui-vue/am-button.vue'], resolve)
    }
  }
}
```

## 组件
请查看例子，以后我再补……
