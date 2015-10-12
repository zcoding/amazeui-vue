<template>

<button type="button" class="am-btn am-btn-{{ type }}" v-class="
  am-radius: radius,
  am-round: round,
  am-active: active,
  am-btn-xl: xl,
  am-btn-lg: lg,
  am-btn-sm: sm,
  am-btn-xs: xs" v-attr="
  disabled: disabled || loading
  ">
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
    }
  },

  data: function() {
    return {
    };
  },

  methods: {
  }

};

</script>
