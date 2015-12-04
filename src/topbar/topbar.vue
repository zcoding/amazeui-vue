<template>

<header class="am-topbar" v-bind:class="{'am-topbar-inverse': inverse, 'am-topbar-fixed-top': fixedTop, 'am-topbar-fixed-bottom': fixedBottom}">
  <h1 class="am-topbar-brand">{{ title }}</h1>
  <slot></slot>
</header>

</template>

<script>

export default {

  props: {
    title: {
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
