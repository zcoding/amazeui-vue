<template>

<grid>
  <column :sm="12" :md="8" :lg="6">
    <button class="am-btn am-btn-default" type="button" v-on:click="showModal = true">打开modal</button>
    <button class="am-btn am-btn-primary" type="button" v-on:click="showAlert = true">打开alert</button>
    <button class="am-btn am-btn-secondary" type="button" v-on:click="showConfirm = true">打开confirm</button>
    <button class="am-btn am-btn-success" type="button" v-on:click="showPrompt = true">打开prompt</button>
  </column>
  <column :sm="12" :md="8" :lg="6">
    <a v-link="{path: '/'}">返回首页</a>
  </column>
</grid>

<modal :show.sync="showModal">
  <div class="am-modal-hd" slot="header">yeah</div>
  <div class="am-modal-bd" slot="body">hhh</div>
</modal>

<alert :show.sync="showAlert" :show.sync="showAlert" :close-via-dimmer="false" :ok="clickAlertOK">好好好</alert>

<confirm :show.sync="showConfirm" :ok="clickConfirmOK" :cancel="clickConfirmCancel">没问题？</confirm>

<prompt :show.sync="showPrompt" :ok="clickPromptOK" :cancel="clickPromptCancel">输入你的名字</prompt>

</template>

<script>

module.exports = {

  data: function() {
    return {
      showModal: false,
      showAlert: false,
      showConfirm: false,
      showPrompt: false
    };
  },

  methods: {
    clickAlertOK: function() {
      this.showAlert = false;
    },
    clickConfirmOK: function() {
      console.log('yeah');
      this.showConfirm = false;
    },
    clickConfirmCancel: function() {
      console.log('no');
      this.showConfirm = false;
    },
    clickPromptOK: function(msg) {
      console.log(msg);
      this.showPrompt = false;
    },
    clickPromptCancel: function() {
      this.showPrompt = false;
    }
  }

};

</script>
