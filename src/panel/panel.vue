<template>

<div class="am-panel am-panel-{{ amStyle }}">
  <div class="am-panel-hd" v-on:click="show = !show">{{ header }}</div>
  <div class="am-panel-collapse" v-if="collapse" v-show="show" transition="collapse"><slot></slot></div>
  <slot v-if="!collapse"></slot>
</div>

</template>

<style>

.collapse-transition {
  position: relative;
  overflow: hidden;
  -webkit-transition: height 300ms ease;
  transition: height 300ms ease;
}
.collapse-enter, .collapse-leave {
  height: 0 !important;
}

</style>

<script>

var utils = require('../utils');

module.exports = {

  props: {
    "amStyle": {
      type: String,
      default: 'default'
    },
    "header": {
      type: String,
      default: ''
    },
    "collapse": {
      type: Boolean,
      default: false
    }
  },

  transitions: {
    collapse: {
      beforeEnter: function(el) {
        el.style.height = this.height;
        utils.repaintTrigger(el);
      },
      afterEnter: function(el) {
        el.style.height = '';
      },
      beforeLeave: function(el) {
        this.height = window.getComputedStyle(el).height;
        el.style.height = this.height;
        utils.repaintTrigger(el);
      },
      afterLeave: function(el) {
        el.style.height = '';
      }
    }
  },

  data: function() {
    return {
      show: true,
      height: ''
    };
  }

};

</script>
