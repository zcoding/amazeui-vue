<template>

<div class="am-form-group">
  <label for="f-{{ name }}"><content></content></label>
  <input id="f-{{ name }}" v-attr="type: type, name: name, placeholder: placeholder">
</div>

</template>

<script>

module.exports = {

  props: ['type', 'name', 'placeholder'],

  data: function() {
    return {
      "type": "text"
    };
  }

};

</script>
