<template>

<modal v-bind:show.sync="show" v-bind:close-via-dimmer="false">
  <div class="am-modal-hd" slot="header" v-if="title !== ''">{{ title }}</div>
  <div class="am-modal-bd" slot="body"><slot>default alert</slot></div>
  <div class="am-modal-footer" slot="footer">
    <span class="am-modal-btn" v-on:click="ok">确定</span>
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

  methods: {
    ok() {
      this.$dispatch('ok');
    }
  }

};

</script>
