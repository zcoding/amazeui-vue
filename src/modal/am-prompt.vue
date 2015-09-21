<template>

<am-modal>
  <div class="am-modal-hd">{{ title }}</div>
  <div class="am-modal-bd">
    {{ message }}
    <input type="text" class="am-modal-prompt-input">
  </div>
  <div class="am-modal-footer">
    <span class="am-modal-btn" v-on="click: cancel">取消</span>
    <span class="am-modal-btn" v-on="click: ok">确定</span>
  </div>
</am-modal>

</template>

<script>

module.exports = {

  props: ['title', 'message', 'ok', 'cancel'],

  components: {
    "amModal": require('./am-modal.vue')
  }

};

</script>
