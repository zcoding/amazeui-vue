<template>

<div class="am-slider am-slider-default">
  <div class="am-viewport">
    <ul class="am-slides">
      <li class="clone" v-for="item in list">
        <img v-bind:src="item.img">
        <div class="am-slider-desc" v-if="item.text">{{ item.text }}</div>
      </li>
    </ul>
  </div>
  <ol class="am-control-nav am-control-paging">
    <li v-for="i in list"><a href="#" v-class="am-active: $index === current">{{ $index+1 }}</a></li>
  </ol>
  <ul class="am-direction-nav">
    <li class="am-nav-prev"><a class="am-prev" href="#"> </a></li>
    <li class="am-nav-next"><a class="am-next" href="#"> </a></li>
  </ul>
</div>

</template>

<script>

export default {

  ready() {
    // initialize
  },

  props: {
    list: {
      type: Array,
      required: true
    }
  },

  data: function() {
    return {
      current: 0
    };
  }

};

</script>
