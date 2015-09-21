<template>

<form class="am-form" v-el="form" v-attr="action: action, method: method">
  <fieldset>
    <content></content>
    <p><button type="submit" class="am-btn am-btn-default" v-on="click: submit($event)">提交</button></p>
  </fieldset>
</form>

</template>

<script>

// Form组件不能单独使用

module.exports = {

  props: ['action', 'method'],

  data: function() {
    return {
      action: '?',
      method: 'GET'
    };
  },
  
  methods: {
    submit: function(event) {
      // this.$disaptch('submit');
    }
  }

};

</script>
