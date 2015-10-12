<template>

<modal show="{{@ show }}" close-via-dimmer="{{* closeViaDimmer }}">
  <div class="am-modal-hd" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd"><content>default alert</content></div>
  <div class="am-modal-footer">
    <span class="am-modal-btn" v-on="click: ok">确定</span>
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
    "modal": require('./am-modal.vue')
  }

};

</script>
