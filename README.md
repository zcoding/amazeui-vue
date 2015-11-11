# amazeui-vue
使用[vue.js](https://github.com/yyx990803/vue/)重构的Amaze UI组件

## About
AmazeUI官方支持[React版本的组件](https://github.com/amazeui/amazeui-react)，对于不想使用React的开发者只能使用jQuery版本，而jQuery版本对于MVVM框架并不十分友好。

本项目基于vue.js的组件系统重构AmazeUI的组件，使其能够在vue.js中使用，支持vue.js的组件编写方式，摆脱jQuery依赖。

## Notice
vue.js 1.0版本已经正式发布了，为了配合vue.js升级，amazeui-vue也将改为使用vue.js 1.0版本。如果你正在使用vue.js 1.0版本或者正在升级你的vue.js到1.0版本，可以使用vuejs1.0分支。

## 组件使用方式
vue.js的组件在使用之前必须先定义和注册。引入本项目只能得到amazeui组件的定义，所以在使用之前仍需注册。

vue.js的组件可以注册到全局或者局部。[vue.js: using components](http://vuejs.org/guide/components.html#Using_Components) or [中文](http://cn.vuejs.org/guide/components.html#使用组件)

### 全局注册
amazeui-vue提供了一个注册到全局的方法，让你可以像使用vuejs插件一样引入amazeui-vue组件。

### 局部注册

#### 同步加载
```javascript
{
  components: {
    "amButton": require('../src/button/am-button.vue')
  }
}
```

#### 异步加载
vue.js支持异步加载组件
```javascript
{
  components: {
    "amButton": function(resolve) {
      require(['../src/button/am-button.vue'], resolve);
    }
  }
}
```

## 组件

### 按钮组件

### 表格组件

### 表单组件
表单组件包含以下几个子组件
+ 输入框（单行和多行，各种类型）
+ 复选框（checkbox）
+ 单选框（radio）
+ 下拉选择框（select）

### 列表组件

### 面板组件

### 模态框组件

### 下拉组件

### 导航组件
