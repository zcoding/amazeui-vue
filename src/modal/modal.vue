<template>

<div class="am-modal" tabindex="-1" v-bind:class="{'am-modal-active': show, 'am-modal-lg': lg}" v-show="show">
  <div class="am-modal-dialog">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</div>

<div class="am-dimmer" v-bind:class="{'am-active': show}" v-show="show" v-on:click="close" transition="modal-fade"></div>

</template>

<style>

.modal-fade-transition {
  -webkit-transition: background-color 300ms 0s;
  transition: background-color 300ms 0s;
}
.modal-fade-enter, .modal-fade-leave {
  background-color: rgba(0, 0, 0, 0);
}

.am-modal, .am-dimmer {
  display: block;
}

.am-modal-lg {
  width: 1024px;
  margin-left: -512px;
  top: 100px;
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
    },
    lg: {
      type: Boolean,
      default: false
    }
  },

  transitions: {
    "modal-fade": {
      beforeEnter(el) {
      },
      enter (el) {
      },
      afterEnter(el) {
      },
      enterCancelled(el) {
      },
      beforeLeave(el) {
      },
      leave(el) {
      },
      afterLeave(el) {
      },
      leaveCancelled(el) {
      }
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
