<template>

<div class="am-form-group">
  <label class="am-checkbox-inline" v-for="item in items">
    <input type="checkbox" :name="name" :value="item.value" v-model="model"> {{ item.label }}
  </label>
</div>

</template>

<script>

module.exports = {

  props: {
    "name": {
      type: String,
      required: true
    },
    "items": {
      type: Array,
      required: true
    },
    "model": {
      type: Array,
      twoWay: true,
      default: function() {
        return [];
      },
      required: false
    }
  }

};

</script>
