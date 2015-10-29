<template>

<button type="button" class="am-btn am-btn-{{ type }}" v-class="
  am-radius: radius,
  am-round: round,
  am-active: active,
  am-btn-xl: xl,
  am-btn-lg: lg,
  am-btn-sm: sm,
  am-btn-xs: xs,
  am-btn-block: block" v-attr="
  disabled: disabled || loading
  ">
  <span class="am-icon-circle-o-notch am-icon-spin" v-if="loading"></span>
  <content>This is a button</content>
</button>

</template>

<script>

module.exports = {

  props: {
    "type": {
      type: String,
      default: 'default'
    },
    "radius": {
      type: Boolean,
      default: false
    },
    "loading": {
      type: Boolean,
      default: false,
      twoWay: true
    },
    "disabled": {
      type: Boolean,
      default: false
    },
    "round": {
      type: Boolean,
      default: false
    },
    "active": {
      type: Boolean,
      default: false
    },
    "xl": {
      type: Boolean,
      default: false
    },
    "lg": {
      type: Boolean,
      default: false
    },
    "sm": {
      type: Boolean,
      default: false
    },
    "xs": {
      type: Boolean,
      default: false
    },
    "block": {
      type: Boolean,
      default: false
    }
  }

};

</script>
