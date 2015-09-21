<template>

<div class="am-form-group">
  <label for="f-{{ name }}"><content></content></label>
  <input id="f-{{ name }}" v-attr="type: type, name: name, placeholder: placeholder, disabled: disabled">
</div>

</template>

<script>

module.exports = {

  props: {
    "type": {
      type: String,
      default: 'text'
    },
    "name": {
      type: String,
      required: true
    },
    "placeholder": {
      type: String
    },
    "disabled": {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
    };
  }

};

</script>
