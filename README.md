# amazeui-vue
[AmazeUI](https://github.com/amazeui/amazeui) components built with [vue.js](https://github.com/vuejs/vue)

[![version](https://img.shields.io/npm/v/amazeui-vue.svg?style=flat-square "version")](https://www.npmjs.com/package/amazeui-vue)
[![LICENSE](https://img.shields.io/npm/l/amazeui-vue.svg?style=flat-square "license")](./LICENSE)

## Installation
### NPM
`npm install amazeui-vue`

It's recommended to use vuejs + webpack + amazeui-vue !

### Standalone
The build-all-in-one file is in the 'dist' folder.

```html
<body>
  <!-- hello world -->
  <!-- remember to add vue.js lib and amazeui styles -->
  <link rel="stylesheet" href="path/to/amazeui.css">
  <script src="path/to/vue.js"></script>
  <!-- include amazeui-vue -->
  <script src="path/to/amazeui-vue.js"></script>
  <script>
  // important !!! remember to use amazeui as a vuejs plugin
  Vue.use(amazeuiVue);
  // now you can use it as you like
  </script>
</body>
```

## About
This repository is built to use Amaze UI as Vue.js components, **without jQuery** requirement.

If you are not familiar with vue.js, you can learn from the [vue.js official site](http://vuejs.org/).

If you want to use the react version, you can find it [here](https://github.com/amazeui/amazeui-react), it's developed by the amazeui team.

## Requirements
+ [vue.js](https://github.com/vuejs/vue) ^1.0.7

[Vue.js 1.0.0 is released!](http://vuejs.org/2015/10/26/1.0.0-release/) Amazeui-vue now requires vue.js@^1.0. If you are upgrading your vue.js project to 1.0 version from 0.12, [this article](./vue.js-0.12vs1.0.md) may help you learn some important changes.

## Documents
+ [中文](./README.CN.md)

## Run examples
__New__

Now `amazeui-vue` use `webpack-dev-server` to run the examples.What you need to do is just `npm run dev` and then open your favourite browser and access `http://localhost:9999`.

And hot-reload is support too.

## Components Available Now
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

## Components In Development
+ `dateTimePicker`
+ `slider`
+ `nprogress`

## How To
You must register the components before you can use amazeui-vue.

You can register the components globally or locally:[vue.js: using components](http://vuejs.org/guide/components.html#Using_Components)

### Global Registration
amazeui-vue exports an install function so taht you can register it as a plugin for vue.js. You can do it like this:
```javascript
Vue.use(require('amazeui-vue').install);
```
and then amazeui-vue components will be registered globally, and they will be load synchronously.

If you want to use amazeui-vue as [asyn components](http://vuejs.org/guide/components.html#Async_Components), use the install-async function:
```javascript
Vue.use(require('amazeui-vue').installAsync);
```

### Local Registration

**_sync_**
```javascript
import amButton from 'amazeui-vue/src/button/am-button.vue'; // you may need babel-loader to do it like this
// or
// var amButton = require('amazeui-vue').button;
// ...
export default {
  components: {
    "amButton": amButton
  }
}
```

**_async_** (with webpack)
```javascript
export default {
  components: {
    "amButton": function(resolve) {
      require(['amazeui-vue/src/button/am-button.vue'], resolve)
    }
  }
}
```

## Components
