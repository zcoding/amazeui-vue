# amazeui-vue
使用[vue.js](https://github.com/yyx990803/vue/)重构的Amaze UI组件

## 组件使用方式
### 同步加载
```javascript
{
  components: {
    "amButton": require('../src/button/am-button.vue')
  }
}
```

### 异步加载
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
