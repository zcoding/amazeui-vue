<template>

<am-list>
  <li><a v-link="{ path: '/' }">首页</a></li>
  <li><a v-link="{ path: '/buttons' }">按钮</a></li>
  <li><a v-link="{ path: '/forms' }">表单</a></li>
  <li><a v-link="{ path: '/tables' }">表格</a></li>
</am-list>
  
</template>

<script>
  
module.exports = {
  components: {
    "amList": require('../../../src/list/am-list.vue')
  }
};
  
</script>
