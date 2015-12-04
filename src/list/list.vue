<template>

<ul class="am-list" v-bind:class="[static?'am-list-static':'', border?'am-list-border':'', striped?'am-list-striped':'']">
  <slot></slot>
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
