<template>

<form class="am-form" v-el="form" :action="action" :method="method">
  <fieldset>
    <slot></slot>
    <p><button type="submit" class="am-btn am-btn-default" v-on:click="submit">提交</button></p>
  </fieldset>
</form>

</template>

<script>

// Form组件不能单独使用

module.exports = {

  props: {
    "action": {
      type: String,
      default: '',
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
  }

};

</script>
