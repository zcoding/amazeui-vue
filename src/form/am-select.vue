<template>

<div class="am-form-group">
  <label for="f-{{ name }}" v-if="label !== ''">{{ label }}</label>
  <select id="f-{{ name }}" name="{{ name }}" v-model="model">
    <option value="{{ item.value }}" v-for="item in items">{{ item.label }}</option>
  </select>
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
    },
    "model": {
      type: String,
      default: '',
      twoWay: true,
      required: false
    }
  }

};

</script>
