<template>

<span class="am-badge" :class="[style, radius?'am-radius':'', round?'am-round':'']"><slot><slot></span>

</template>

<script>

module.exports = {
  props: {
    amStyle: {
      type: String,
      default: 'default'
    },
    radius: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style: function() {
      return 'am-badge-' + this.amStyle;
    }
  }
};

</script>
