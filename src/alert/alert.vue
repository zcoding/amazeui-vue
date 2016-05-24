<template>

<div class="am-alert am-alert-{{ style }}" transition="fadeout">
  <button type="button" class="am-close" v-if="closeable" @click="close">&times;</button>
  <slot></slot>
</div>

</template>

<style>
.fadeout-transition {
  opacity: 1;
  -webkit-transition: opacity .2s linear;
  transition: opacity .2s linear;
}
.fadeout-leave {
  opacity: 0 !important;
}
</style>

<script>

export default {
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
    close(event) {
      event && event.preventDefault();
      this.$destroy(true);
      return false;
    }
  }
};

</script>
