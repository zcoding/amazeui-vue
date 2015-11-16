<template>

<header class="am-topbar"></header>

</template>

<script>

export default {

  props: {
    brand: {
      type: String,
      default: ''
    },
    inverse: {
      type: Boolean,
      default: false
    },
    fixedTop: {
      type: Boolean,
      default: false
    },
    fixedBottom: {
      type: Boolean,
      default: false
    }
  }

};

</script>
