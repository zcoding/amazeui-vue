<template>

<modal v-bind:show.sync="show" v-bind:close-via-dimmer="false">
  <div class="am-modal-hd" slot="header" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd" slot="body">
    <slot>输入</slot>
    <input type="text" class="am-modal-prompt-input" v-model="message">
  </div>
  <div class="am-modal-footer" slot="footer">
    <span class="am-modal-btn" v-on:click="cancel">取消</span>
    <span class="am-modal-btn" v-on:click="ok(message)">确定</span>
  </div>
</modal>

</template>

<script>

import modal from './modal.vue';

export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    }
  },

  components: {
    modal
  },

  data() {
    return {
      message: ''
    };
  },

  methods: {
    ok(message) {
      this.$dispatch('ok', message);
    },

    cancel() {
      this.$dispatch('cancel');
    }
  }

};

</script>
