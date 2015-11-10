<template>

<div class="am-form-group">
  <label for="f-{{ name }}" v-if="label !== ''">{{ label }}</label>
  <select id="f-{{ name }}" name="{{ name }}">
    <option value="{{ item.value }}" v-for="item in items">{{ item.label }}</option>
  </select>
  <span class="am-form-caret"></span>
</div>

</template>

<script>

module.exports = {

  props: {
    "label": {
      type: String,
      default: ''
    },
    "name": {
      type: String,
      required: true
    },
    "items": {
      type: Array,
      required: true
    }
  },

  data: function() {
    return {
    };
  }

};

</script>
