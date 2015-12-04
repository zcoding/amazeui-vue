<template>

<grid>
  <column v-bind:sm="12" v-bind:md="6" v-bind:lg="8">

    <am-form v-bind:submit="submit" async>

      <am-alert v-bind:closed="alertClosed" style="warning" closeable v-ref:alert>我是提示，只显示一次，关了就没了</am-alert>

      <am-input type="email" name="email" placeholder="请输入邮箱" v-bind:model.sync"form.email">邮箱</am-input>

      <am-input name="nick" placeholder="请输入昵称" v-bind:model.sync="form.nick">昵称</am-input>

      <am-input name="nick2" placeholder="请输入昵称" disabled v-bind:model.sync="form.nick2">被禁用</am-input>

      <am-input type="password" name="passwd" placeholder="请输入密码" v-bind:model.sync="form.passwd">密码</am-input>

      <checkbox name="when" v-bind:items="[{label: '加蛋', value: '1'}, {label: '加饭', value: '2'}, {label: '加汤', value: '3'}]" v-bind:model.sync="form.when"></checkbox>

      <radio name="type" v-bind:items="[{label: '中通', value: '1'}, {label: '圆通', value: '2'}, {label: '申通', value: '3'}]" v-bind:model.sync="form.type"></radio>

      <am-select label="时间" name="when2" v-bind:items="[{label: '上午', value: '1'}, {label: '中午', value: '2'}, {label: '下午', value: '3'}]" v-bind:model.sync="form.when2"></am-select>

    </am-form>

  </column>
</grid>

</template>

<script>

export default {

  data() {
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
    submit() {
      this.$log('form');
    },
    alertClosed() {
      alert('调用closed的时候还没有完全销毁');
    }
  }

};

</script>
