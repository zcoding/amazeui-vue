<template>

<i class="am-icon-{{ name }} am-icon-fw" v-class="am-icon-spin: spin, am-icon-pulse: pulse"></i>

</template>

<script>

module.exports = {
  props: {
    name: {
      type: String,
      required: true
    },
    spin: {
      type: Boolean,
      default: false
    },
    pulse: {
      type: Boolean,
      default: false
    }
  }
};

</script>
