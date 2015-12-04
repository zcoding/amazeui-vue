<template>

<form class="am-form" v-el="form" v-bind:action="action" v-bind:method="method">
  <fieldset>
    <slot></slot>
    <p><button type="submit" class="am-btn am-btn-default" v-on:click="submitForm">提交</button></p>
  </fieldset>
</form>

</template>

<script>

// Form组件不能单独使用

export default {

  props: {
    "action": {
      type: String,
      default: ''
    },
    "method": {
      type: String,
      default: 'GET'
    },
    "submit": {
      type: Function,
      required: true,
      default() {}
    },
    "async": {
      type: Boolean,
      default: false
    }
  },

  methods: {
    submitForm(event) {
      if (this.async) {
        event.preventDefault();
      }
      this.submit();
      return false;
    }
  }

};

</script>
