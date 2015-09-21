<template>
  
<am-grid>
  <am-col sm="12" md="8" lg="6">
    <am-button></am-button>
    <am-button type="primary" v-on="click: alert">主色按钮</am-button>
    <am-button type="secondary" radius>次色圆角按钮</am-button>
    <am-button type="success" disabled round>绿色禁用椭圆按钮</am-button>
    <am-button type="warning" round>橙色椭圆按钮</am-button>
    <am-button type="danger" active>红色激活按钮</am-button>
  </am-col>
  <am-col sm="12" md="8" lg="6">
    <a v-link="{ path: '/' }">返回</a>
  </am-col>
</am-grid>

</template>

<script>
  
module.exports = {
  
  components: {
    "amGrid": require('../../../src/grid/am-grid.vue'),
    "amCol": require('../../../src/grid/am-col.vue'),
    "amButton": require('../../../src/button/am-button.vue')
  },
  
  methods: {
    "alert": function() {
      alert('yeah~');
    }
  }
  
};
  
</script>
