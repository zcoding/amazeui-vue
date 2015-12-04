<template>

<grid>
  <column v-bind:sm="12" v-bind:md="8" v-bind:lg="6">
    <button class="am-btn am-btn-default" type="button" v-on:click="showModal=true">open modal</button>
    <button class="am-btn am-btn-primary" type="button" v-on:click="showAlert=true">alert</button>
    <button class="am-btn am-btn-secondary" type="button" v-on:click="showConfirm=true">confirm</button>
    <button class="am-btn am-btn-success" type="button" v-on:click="showPrompt=true">prompt</button>
  </column>
</grid>

<modal v-bind:show.sync="showModal" lg>
  <div class="am-modal-hd" slot="header">yeah</div>
  <div class="am-modal-bd" slot="body">nothing</div>
</modal>

<alert v-bind:show.sync="showAlert" v-on:ok="clickAlertOK">好好好</alert>

<confirm v-bind:show.sync="showConfirm" v-on:ok="clickConfirmOK" v-on:cancel="clickConfirmCancel">Are you OK ?</confirm>

<prompt v-bind:show.sync="showPrompt" v-on:ok="clickPromptOK" v-on:cancel="clickPromptCancel">输入你的名字</prompt>

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
