<template>

<grid>
  <column sm="12" md="8" lg="6">
    <list striped border>
      <li><a v-link="{ path: '/' }">首页</a></li>
      <li><a v-link="{ path: '/buttons' }">按钮</a></li>
      <li><a v-link="{ path: '/forms' }">表单</a></li>
      <li><a v-link="{ path: '/tables' }">表格</a></li>
    </list>
  </column>
  <column sm="12" md="8" lg="6">
    <list striped border static>
      <li><badge type="success">Yes</badge> static, border and striped</li>
      <li><badge type="danger">Yes</badge> static, border and striped</li>
      <li><badge type="primary">Yes</badge> static, border and striped</li>
      <li><badge>Yes</badge> static, border and striped</li>
    </list>
  </column>
  <column sm="12" md="8" lg="6">
    <list border static>
      <li><badge type="success">Yes</badge> static, border</li>
      <li><badge type="danger">Yes</badge> static, border</li>
      <li><badge type="primary">Yes</badge> static, border</li>
      <li><badge>Yes</badge> static, border</li>
    </list>
  </column>
  <column sm="12" md="8" lg="6">
    <list striped border static>
      <li><icon name="home"></icon> static, border and striped</li>
      <li><icon name="spinner" pulse></icon> static, border and striped</li>
      <li><icon name="gear" spin></icon> static, border and striped</li>
      <li><icon name="github"></icon> static, border and striped</li>
    </list>
  </column>
</grid>

</template>

<script>

var amaze = require('amaze');

module.exports = {
  components: {
    "list": amaze.list,
    "grid": amaze.grid.grid,
    "column": amaze.grid.column,
    "badge": amaze.badge,
    "icon": amaze.icon
  }
};

</script>
