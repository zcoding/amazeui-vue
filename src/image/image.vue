<template>

<img :src="src" :alt="alt" :class="{'am-radius': radius, 'am-round': round, 'am-circle': circle, 'am-img-responsive': responsive, 'am-img-thumbnail': thumbnail}">

</template>

<script>

export default {

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
    // class control
    , radius: {
      type: Boolean,
      default: false
    }
    , round: {
      type: Boolean,
      default: false
    }
    , circle: {
      type: Boolean,
      default: false
    }
    , responsive: {
      type: Boolean,
      default: false
    }
    , thumbnail: {
      type: Boolean,
      default: false
    }
  }

};

</script>
