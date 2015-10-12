<template>

<am-grid>
  <am-col sm="12" md="6" lg="8">
    <am-form submit="{{submit}}">
      <am-input type="email" name="email" placeholder="请输入邮箱" model="{{@ form.email }}">邮箱</am-input>
      <am-input name="nick" placeholder="请输入昵称" model="{{@ form.nick }}">昵称</am-input>
      <am-input name="nick2" placeholder="请输入昵称" disabled model="{{@ form.nick2 }}">被禁用</am-input>
      <am-input type="password" name="passwd" placeholder="请输入密码" model="{{@ form.passwd }}">密码</am-input>
      <am-checkbox name="when" items="{{ checkboxes }}" model="{{@ form.when }}"></am-checkbox>
      <am-radio name="type" items="{{ radios }}" model="{{@ form.type }}"></am-radio>
      <am-select label="时间" name="when2" items="{{ options }}" model="{{@ form.when2 }}"></am-select>
    </am-form>
  </am-col>
  <am-col sm="12" md="6" lg="4">
    <a v-link="{path: '/'}">返回首页</a>
  </am-col>
</am-grid>

</template>

<script>

var amaze = require('amaze');

module.exports = {

  components: {
    "amGrid": amaze.grid.grid,
    "amCol": amaze.grid.col,
    "amForm": amaze.form.form,
    "amInput": amaze.form.input,
    "amCheckbox": amaze.form.checkbox,
    "amRadio": amaze.form.radio,
    "amSelect": amaze.form.select
  },

  data: function() {
    return {
      "checkboxes": [{label: '加蛋', value: 1}, {label: '加饭', value: 2}, {label: '加汤', value: 3}],
      "radios": [{label: '中通', value: 1}, {label: '圆通', value: 2}, {label: '申通', value: 3}],
      "options": [{label: '上午', value: 1}, {label: '中午', value: 2}, {label: '下午', value: 3}],
      form: {
        email: '',
        nick: '',
        nick2: '',
        passwd: '',
        when: '',
        type: '',
        when2: ''
      }
    };
  },

  methods: {
    submit: function(event) {
      event.preventDefault();
      console.log(this.form.email);
      return false;
    }
  }

};

</script>
