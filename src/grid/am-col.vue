<template>

<div v-class="
  am-u-sm-1: sm === 1,
  am-u-sm-2: sm === 2,
  am-u-sm-3: sm === 3,
  am-u-sm-4: sm === 4,
  am-u-sm-5: sm === 5,
  am-u-sm-6: sm === 6,
  am-u-sm-7: sm === 7,
  am-u-sm-8: sm === 8,
  am-u-sm-9: sm === 9,
  am-u-sm-10: sm === 10,
  am-u-sm-11: sm === 11,
  am-u-sm-12: sm === 12,
  am-u-md-1: md === 1,
  am-u-md-2: md === 2,
  am-u-md-3: md === 3,
  am-u-md-4: md === 4,
  am-u-md-5: md === 5,
  am-u-md-6: md === 6,
  am-u-md-7: md === 7,
  am-u-md-8: md === 8,
  am-u-md-9: md === 9,
  am-u-md-10: md === 10,
  am-u-md-11: md === 11,
  am-u-md-12: md === 12,
  am-u-lg-1: lg === 1,
  am-u-lg-2: lg === 2,
  am-u-lg-3: lg === 3,
  am-u-lg-4: lg === 4,
  am-u-lg-5: lg === 5,
  am-u-lg-6: lg === 6,
  am-u-lg-7: lg === 7,
  am-u-lg-8: lg === 8,
  am-u-lg-9: lg === 9,
  am-u-lg-10: lg === 10,
  am-u-lg-11: lg === 11,
  am-u-lg-12: lg === 12
">
  <content></content>
</div>
  
</template>

<script>
  
module.exports = {
  
  props: {
    "sm": {
      type: Number,
      default: 0
    },
    "md": {
      type: Number,
      default: 0
    },
    "lg": {
      type: Number,
      default: 0
    }
  },
  
  data: function() {
    return {
    };
  }
  
};
  
</script>
