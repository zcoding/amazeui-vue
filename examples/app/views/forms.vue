<template>

<grid>
  <column :sm="12" :md="6" :lg="8">
    <am-form :submit="submit">
      <alert :closed="alertClosed" style="warning" closeable v-ref:alert>我是提示，只显示一次，关了就没了</alert>
      <am-input type="email" name="email" placeholder="请输入邮箱" :model.sync"form.email">邮箱</am-input>
      <am-input name="nick" placeholder="请输入昵称" :model.sync="form.nick">昵称</am-input>
      <am-input name="nick2" placeholder="请输入昵称" disabled :model.sync="form.nick2">被禁用</am-input>
      <am-input type="password" name="passwd" placeholder="请输入密码" :model.sync="form.passwd">密码</am-input>
      <am-checkbox name="when" :items="[{label: '加蛋', value: '1'}, {label: '加饭', value: '2'}, {label: '加汤', value: '3'}]" :model.sync="form.when"></am-checkbox>
      <am-radio name="type" :items="[{label: '中通', value: '1'}, {label: '圆通', value: '2'}, {label: '申通', value: '3'}]" :model.sync="form.type"></am-radio>
      <am-select label="时间" name="when2" :items="[{label: '上午', value: '1'}, {label: '中午', value: '2'}, {label: '下午', value: '3'}]" :model.sync="form.when2"></am-select>
    </am-form>
  </column>
  <column :sm="12" :md="6" :lg="4">
    <a v-link="{path: '/'}">返回首页</a>
  </column>
</grid>

</template>

<script>

var amaze = require('amaze');

module.exports = {

  components: {
    "grid": amaze.grid.grid,
    "column": amaze.grid.column,
    "amForm": amaze.form.form,
    "amInput": amaze.form.input,
    "amCheckbox": amaze.form.checkbox,
    "amRadio": amaze.form.radio,
    "amSelect": amaze.form.select,
    "alert": amaze.alert
  },

  data: function() {
    return {
      form: {
        email: '',
        nick: '',
        nick2: '',
        passwd: '',
        when: [],
        type: '',
        when2: '1'
      }
    };
  },

  methods: {
    submit: function(event) {
      event.preventDefault();
      this.$log(this.form);
      return false;
    },
    alertClosed: function() {
      alert('调用closed的时候还没有完全销毁');
    }
  }

};

</script>
