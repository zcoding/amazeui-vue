<template>

<ul class="am-list" v-class="am-list-static: static,am-list-border: border, am-list-striped: striped">
  <content></content>
</ul>

</template>

<script>

module.exports = {
  props: {
    static: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    }
  }
};

</script>
