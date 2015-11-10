<template>

<div class="am-panel am-panel-{{ amStyle }}">
  <div class="am-panel-hd" v-on:click="show = !show">{{ header }}</div>
  <div class="am-panel-collapse" v-if="collapsible" v-show="show" transition="collapse"><slot></slot></div>
  <slot v-if="!collapsible"></slot>
</div>

</template>

<style lang="stylus">

speed = .3s

.collapse-transition
  position relative
  overflow hidden
  -webkit-transition height speed ease
  transition height speed ease

.collapse-enter, .collapse-leave
  height 0 !important

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
    "collapsible": {
      type: Boolean,
      default: false
    }
  },

  transitions: {
    collapse: {
      beforeEnter: function(el) {
        this.lastHeight = el.style.height = this.lastHeight;
        utils.repaintTrigger(el);
      },
      afterEnter: function(el) {
        el.style.height = '';
      },
      beforeLeave: function(el) {
        this.lastHeight = el.style.height = window.getComputedStyle(el).height;
        utils.repaintTrigger(el);
      },
      afterLeave: function(el) {
        el.style.height = '';
      }
    }
  },

  data: () => {
    return {
      show: true,
      lastHeight: ''
    };
  }

};

</script>
