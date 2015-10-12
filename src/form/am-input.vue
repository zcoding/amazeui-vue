<template>

<div class="am-form-group">
  <label for="f-{{ name }}"><content></content></label>
  <input id="f-{{ name }}" v-attr="type: type, name: name, placeholder: placeholder, disabled: disabled" v-model="model">
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
    },
    "model": {
      type: String,
      twoWay: true,
      default: '',
      required: false
    }
  },

  data: function() {
    return {
    };
  }

};

</script>
