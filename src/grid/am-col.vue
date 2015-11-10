<template>

<div :class="[small, middle, large]">
  <slot></slot>
</div>

</template>

<script>

module.exports = {

  props: {
    "sm": {
      type: Number,
      default: 0
    },
    "md": {
      type: Number,
      default: 0
    },
    "lg": {
      type: Number,
      default: 0
    }
  },

  computed: {
    small: function() {
      var sm = '';
      if (this.sm !== 0) {
        sm += 'am-u-sm-' + this.sm;
      }
      return sm;
    },
    middle: function() {
      var md = '';
      if (this.md !== 0) {
        md += 'am-u-md-' + this.md;
      }
      return md;
    },
    large: function() {
      var lg = '';
      if (this.lg !== 0) {
        lg += 'am-u-lg-' + this.lg;
      }
      return lg;
    }
  }

};

</script>
