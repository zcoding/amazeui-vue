<template>

<modal :show.sync="show" :close-via-dimmer="false">
  <div class="am-modal-hd" slot="header" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd" slot="body"><slot>Are you sure ?</slot></div>
  <div class="am-modal-footer" slot="footer">
    <span class="am-modal-btn" v-on:click="cancel">取消</span>
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
    "modal": require('./modal.vue')
  }

};

</script>
