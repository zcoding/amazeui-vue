# 面包屑导航组件

## 属性

+ `slash` 使用`/`作为分隔符，可选

## 子组件

+ breadcrumbItem

## 例子

```javascript
<template>

<breadcrumb>
  <breadcrumb-item v-for="item in menus" :link="item.link">{{ item.name }}</breadcrumb-item>
</breadcrumb>

<breadcrumb slash>
  <breadcrumb-item v-for="item in menus" :link="item.link">{{ item.name }}</breadcrumb-item>
</breadcrumb>

</template>

<script>

import {breadcrumb} from 'amaze';

export default {
  components: {
    "breadcrumb": breadcrumb,
    "breadcrumbItem": breadcrumb.item
  },
  data() {
    return {
      menus: [{
        "name": "首页",
        "link": "/"
      }, {
        "name": "内容",
        "link": "/articles"
      }, {
        "name": "关于"
      }]
    };
  }
};

</script>
```
