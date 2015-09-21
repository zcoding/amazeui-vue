<template>

<button type="button" class="am-btn am-btn-{{ type }}" v-class="am-radius: radius,am-round: round,am-active: active" v-attr="disabled: disabled"><content>This is a button</content></button>

</template>

<script>

module.exports = {

  props: ['type', 'radius', 'round', 'active', 'disabled'],

  data: function() {
    return {
      type: 'default',
      radius: false,
      round: false,
      active: false,
      disabled: false
    };
  },
  
  methods: {
  }

};

</script>
