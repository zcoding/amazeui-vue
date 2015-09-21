<template>
  
<am-grid>
  <am-col sm="12" md="8" lg="6">
  
    <am-panel header="面板标题" style="success">
      <div class="am-panel-bd">面板内容</div>
    </am-panel>
    
    <am-panel header="面板+表格" style="primary">
      <am-table items="{{ items }}"></am-table>
    </am-panel>
    
    <am-panel header="面板+列表" style="warning">
      <am-list>
        <li><a v-link="{ path: '/' }">首页</a></li>
        <li><a v-link="{ path: '/buttons' }">按钮</a></li>
        <li><a v-link="{ path: '/forms' }">表单</a></li>
        <li><a v-link="{ path: '/tables' }">表格</a></li>
      </am-list>
    </am-panel>
    
  </am-col>
</am-grid>

</template>

<script>

module.exports = {
  
  components: {
    "amGrid": require('../../../src/grid/am-grid.vue'),
    "amCol": require('../../../src/grid/am-col.vue'),
    "amPanel": require('../../../src/panel/am-panel.vue'),
    "amTable": require('../../../src/table/am-table.vue'),
    "amList": require('../../../src/list/am-list.vue')
  },

  data: function() {
    return {
      items: [[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]]
    };
  }

};
  
</script>
