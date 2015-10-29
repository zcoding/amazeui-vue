<template>

<div class="am-alert am-alert-{{ style }}" v-transition="fadeout">
  <button type="button" class="am-close" v-if="closeable" v-on="click: close($event)">&times;</button>
  <content></content>
</div>

</template>

<style lang="stylus">
  .fadeout-transition
    opacity 1
    -webkit-transition opacity .2s linear
    transition opacity .2s linear
  .fadeout-leave
    opacity 0 !important
</style>

<script>

module.exports = {

  props: {
    closeable: {
      type: Boolean,
      default: true
    },
    closed: {
      type: Function,
      default: function() {
        return false;
      }
    },
    style: {
      type: String,
      default: 'success'
    }
  },

  transitions: {
    fadeout: {
      afterLeave: function (el) {
        // 此时还没有完全销毁
        return this.closed();
      }
    }
  },

  methods: {
    close: function(event) {
      event && event.preventDefault();
      this.$destroy(true);
      return false;
    }
  }

};

</script>
