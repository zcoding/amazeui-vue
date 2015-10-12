<template>

<div class="am-modal" tabindex="-1" v-class="am-modal-active: show" v-show="show">
  <div class="am-modal-dialog">
    <content select=".am-modal-hd"></content>
    <content select=".am-modal-bd"></content>
    <content select=".am-modal-footer"></content>
  </div>
</div>

<div class="am-dimmer" v-class="am-active: show" v-show="show" v-on="click: close()"></div>

</template>

<style>

.am-modal, .am-dimmer {
  display: block;
}

</style>

<script>

module.exports = {
  ready: function() {
  },
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    closeViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    }
  },

  methods: {
    close: function() {
      if (this.closeViaDimmer) {
        this.show = false;
      }
    }
  }
};

</script>
