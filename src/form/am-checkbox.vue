<template>
  
<div class="am-form-group">
  <label class="am-checkbox-inline" v-repeat="item in items">
    <input type="checkbox" name="{{ name }}" value="{{ item.value }}"> {{ item.label }}
  </label>
</div>
  
</template>

<script>
  
module.exports = {
  
  props: {
    "name": {
      type: String,
      required: true
    },
    "items": {
      type: Array,
      required: true
    }
  },
  
  data: function() {
    return {
    };
  }
  
};
  
</script>
