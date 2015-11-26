<template>

<div class="am-modal" tabindex="-1" :class="{'am-modal-active': show}" v-show="show">
  <div class="am-modal-dialog">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</div>

<div class="am-dimmer" :class="{'am-active': show}" v-show="show" @click="close"></div>

</template>

<style>

.am-modal, .am-dimmer {
  display: block;
}

</style>

<script>

export default {

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
    close() {
      if (this.closeViaDimmer) {
        this.show = false;
      }
    }
  }

};

</script>
