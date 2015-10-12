<template>

<span class="am-badge am-badge-{{ type }}" v-class="am-radius: radius, am-round: round"><content><content></span>

</template>

<script>

module.exports = {
  props: {
    type: {
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
  }
};

</script>
