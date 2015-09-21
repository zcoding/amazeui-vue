<template>
  <am-button></am-button>
  <am-button type="primary" v-on="click: alert">主色按钮</am-button>
  <am-button type="secondary">次色按钮</am-button>
  <am-button type="success" disabled="true">绿色禁用按钮</am-button>
  <am-button type="warning" round="true">橙色圆角按钮</am-button>
  <am-button type="danger" active="true">红色激活按钮</am-button>
</template>

<script>
  
module.exports = {
  
  components: {
    "amButton": require('../../../src/button/am-button.vue')
  },
  
  methods: {
    "alert": function() {
      alert('yeah~');
    }
  }
  
};
  
</script>
