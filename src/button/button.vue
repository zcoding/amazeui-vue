<template>

<button type="button" class="am-btn" v-bind:disabled="disabled || loading" v-bind:class="[buttonStyle, buttonSize, radius?'am-radius':'', round?'am-round':'', active?'am-active':'', block?'am-btn-block':'']">
  <span class="am-icon-circle-o-notch am-icon-spin" v-if="loading"></span>
  <slot>This is a button</slot>
</button>

</template>

<script>

export default {
  props: {
    "amStyle": {
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
  },

  computed: {
    buttonStyle() {
      return `am-btn-${this.amStyle}`;
    },
    buttonSize() {
      if (this.xl) {
        return 'am-btn-lg';
      }
      if (this.md) {
        return 'am-btn-md';
      }
      if (this.sm) {
        return 'am-btn-sm';
      }
      if (this.xs) {
        return 'am-btn-xs';
      }
      return '';
    }
  }
};

</script>
