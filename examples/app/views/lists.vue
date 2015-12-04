<template>

<grid>
  <column v-bind:sm="12" v-bind:md="8" v-bind:lg="6">
    <list striped border>
      <li><a v-link="{ path: '/' }">首页</a></li>
      <li><a v-link="{ path: '/buttons' }">按钮</a></li>
      <li><a v-link="{ path: '/forms' }">表单</a></li>
      <li><a v-link="{ path: '/tables' }">表格</a></li>
    </list>
  </column>
  <column v-bind:sm="12" v-bind:md="8" v-bind:lg="6">
    <list striped border static>
      <li><badge am-style="success">Yes</badge> static, border and striped</li>
      <li><badge am-style="danger">Yes</badge> static, border and striped</li>
      <li><badge am-style="primary">Yes</badge> static, border and striped</li>
      <li><badge>Yes</badge> static, border and striped</li>
    </list>
  </column>
  <column v-bind:sm="12" v-bind:md="8" v-bind:lg="6">
    <list border static>
      <li><badge am-style="success">Yes</badge> static, border</li>
      <li><badge am-style="danger">Yes</badge> static, border</li>
      <li><badge am-style="primary">Yes</badge> static, border</li>
      <li><badge>Yes</badge> static, border</li>
    </list>
  </column>
  <column v-bind:sm="12" v-bind:md="8" v-bind:lg="6">
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

module.exports = {
};

</script>
