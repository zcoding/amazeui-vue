<template>
  
<div class="am-form-group">
  <label for="f-{{ name }}">{{ label }}</label>
  <select id="f-{{ name }}" name="{{ name }}">
    <option value="{{ item.value }}" v-repeat="item in items">{{ item.label }}</option>
  </select>
  <span class="am-form-caret"></span>
</div>
  
</template>

<script>
  
module.exports = {
  
  props: ['label', 'name', 'items'],
  
  data: function() {
    return {
    };
  }
  
};
  
</script>
