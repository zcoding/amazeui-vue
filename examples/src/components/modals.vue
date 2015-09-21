<template>
  
<am-grid>
  <am-col sm="12" md="8" lg="6">
    <am-button v-on="click: openModal">打开modal</am-button>
  </am-col>
</am-grid>
  
</template>

<script>
  
module.exports = {
  
  components: {
    "amButton": require('../../../src/button/am-button.vue'),
    "amModal": require('../../../src/modal/am-modal.vue')
  },
  
  methods: {
    openModal: function() {
      
    }
  }
  
};  

</script>
