<template>

<modal :show.sync="show" :close-via-dimmer.once="closeViaDimmer">
  <div class="am-modal-hd" slot="header" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd" slot="body"><slot>default alert</slot></div>
  <div class="am-modal-footer" slot="footer">
    <span class="am-modal-btn" v-on:click="ok">确定</span>
  </div>
</modal>

</template>

<script>

module.exports = {

  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    closeViaDimmer: { // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },
    ok: {
      type: Function,
      default: function() {
        return false;
      }
    }
  },

  components: {
    "modal": require('./modal.vue')
  }

};

</script>
