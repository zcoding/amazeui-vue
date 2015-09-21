<template>

<am-modal>
  <div class="am-modal-hd">{{ title }}</div>
  <div class="am-modal-bd">{{ message }}</div>
  <div class="am-modal-footer">
    <span class="am-modal-btn" v-on="click: ok">确定</span>
  </div>
</am-modal>

</template>

<script>

module.exports = {

  props: ['title', 'message', 'ok'],

  components: {
    "amModal": require('./am-modal.vue')
  }

};

</script>
