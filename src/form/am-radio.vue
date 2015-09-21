<template>
  
<div class="am-form-group">
  <label class="am-radio-inline" v-repeat="item in items">
    <input type="radio" name="{{ name }}" value="{{ item.value }}"> {{ item.label }}
  </label>
</div>
  
</template>

<script>
  
module.exports = {
  
  props: ['name', 'items'],
  
  data: function() {
    return {
      "items": []
    };
  }
  
};
  
</script>
