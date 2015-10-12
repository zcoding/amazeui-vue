<template>

<modal show="{{@ show }}" close-via-dimmer="false">
  <div class="am-modal-hd" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd">
    <content>输入</content>
    <input type="text" class="am-modal-prompt-input" v-model="message">
  </div>
  <div class="am-modal-footer">
    <span class="am-modal-btn" v-on="click: cancel">取消</span>
    <span class="am-modal-btn" v-on="click: ok(message)">确定</span>
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
    ok: {
      type: Function,
      default: function() {
        return false;
      }
    },
    cancel: {
      type: Function,
      default: function() {
        return false;
      }
    }
  },

  components: {
    "modal": require('./am-modal.vue')
  },

  data: function() {
    return {
      message: ''
    };
  }

};

</script>
