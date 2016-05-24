<template>

<span class="am-badge" :class="[style, radius?'am-radius':'', round?'am-round':'']"><slot><slot></span>

</template>

<script>

export default {
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
    style() {
      return `am-badge-${this.amStyle}`;
    }
  }
};

</script>
