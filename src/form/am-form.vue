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

  props: {
    "action": {
      type: String,
      default: '/api?',
      required: false
    },
    "method": {
      type: String,
      default: 'GET',
      required: false
    },
    "submit": {
      type: Function,
      required: true,
      default: function(event) {
        event.preventDefault();
        return false;
      }
    }
  },

  data: function() {
    return {
    };
  },

  methods: {
  }

};

</script>
