<template>
  
  <am-grid>
    <am-col sm="12" md="6" lg="8">
      <am-form>
        <am-input type="email" name="email" placeholder="请输入邮箱">邮箱</am-input>
        <am-input name="nick" placeholder="请输入昵称">昵称</am-input>
        <am-input name="nick2" placeholder="请输入昵称" disabled>被禁用</am-input>
        <am-input type="password" name="passwd" placeholder="请输入密码">密码</am-input>
        <am-checkbox name="when" items="{{ checkboxes }}"></am-checkbox>
        <am-radio name="type" items="{{ radios }}"></am-radio>
        <am-select label="时间" name="when" items="{{ options }}"></am-select>
      </am-form>
    </am-col>
  </am-grid>
  
</template>

<script>
  
module.exports = {
  
  components: {
    "amGrid": require('../../../src/grid/am-grid.vue'),
    "amCol": require('../../../src/grid/am-col.vue'),
    "amForm": require('../../../src/form/am-form.vue'),
    "amInput": require('../../../src/form/am-input.vue'),
    "amCheckbox": require('../../../src/form/am-checkbox.vue'),
    "amRadio": require('../../../src/form/am-radio.vue'),
    "amSelect": require('../../../src/form/am-select.vue')
  },
  
  data: function() {
    return {
      "checkboxes": [{label: '加蛋', value: 1}, {label: '加饭', value: 2}, {label: '加汤', value: 3}],
      "radios": [{label: '中通', value: 1}, {label: '圆通', value: 2}, {label: '申通', value: 3}],
      "options": [{label: '上午', value: 1}, {label: '中午', value: 2}, {label: '下午', value: 3}]
    };
  },
  
  methods: {
  }
  
};
  
</script>
