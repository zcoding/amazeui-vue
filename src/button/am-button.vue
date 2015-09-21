<template>

<button type="button" class="am-btn am-btn-{{ type }}" v-class="am-radius: radius,am-round: round,am-active: active"><content>This is a button</content></button>

</template>

<script>

module.exports = {

  props: {
    "type": {
      type: String,
      default: 'default'
    },
    "radius": {
      type: Boolean,
      default: false
    },
    "round": {
      type: Boolean,
      default: false
    },
    "active": {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
    };
  },
  
  methods: {
  }

};

</script>
