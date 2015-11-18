<template>

<grid>
  <column :sm="12" :md="8" :lg="6">
    <button class="am-btn am-btn-default" type="button" @click="showModal=true">open modal</button>
    <button class="am-btn am-btn-primary" type="button" @click="showAlert=true">alert</button>
    <button class="am-btn am-btn-secondary" type="button" @click="showConfirm=true">confirm</button>
    <button class="am-btn am-btn-success" type="button" @click="showPrompt=true">prompt</button>
  </column>
</grid>

<modal :show.sync="showModal">
  <div class="am-modal-hd" slot="header">yeah</div>
  <div class="am-modal-bd" slot="body">nothing</div>
</modal>

<alert :show.sync="showAlert" :close-via-dimmer="false" :ok="clickAlertOK">好好好</alert>

<confirm :show.sync="showConfirm" :ok="clickConfirmOK" :cancel="clickConfirmCancel">Are you OK ?</confirm>

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
      this.showPrompt = false;
      alert(msg);
    },
    clickPromptCancel: function() {
      this.showPrompt = false;
    }
  }

};

</script>
