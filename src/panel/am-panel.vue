<template>
  
<div class="am-panel am-panel-{{ style }}">
  <div class="am-panel-hd" v-if="header !== ''">{{ header }}</div>
  <content></content>
</div>

  
</template>

<script>
  
module.exports = {
  
  props: {
    "style": {
      type: String,
      default: 'default'
    },
    "header": {
      type: String,
      default: ''
    }
  },
  
  data: function() {
    return {};
  }
  
  // TODO: https://github.com/allmobilize/amazeui/blob/master/js/ui.collapse.js
  
};  

</script>
