<template>

<i class="am-icon-fw" :class="[iconName, spin?'am-icon-spin':'', pulse?'am-icon-pulse':'']"></i>

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
  },

  computed: {
    iconName: function() {
      return 'am-icon-' + this.name;
    }
  }
};

</script>
