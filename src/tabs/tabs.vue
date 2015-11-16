<template>

<div class="am-tabs" v-el="tab">
  <ul class="am-tabs-nav am-nav am-nav-tabs">
    <li v-class="am-active: $index === active" v-for="tab in tabs"><a href="javascript:;" v-on="click: tabTo($index)">{{ tab.title }}</a></li>
  </ul>

  <div class="am-tabs-bd">
    <div class="am-tab-panel" v-class="am-active: $index === active" v-for="tab in tabs">{{ tab.content }}</div>
  </div>
</div>

</template>

<script>

module.exports = {

  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Number,
      twoWay: true,
      default: 0
    },
    justify: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    tabTo: function(index) {
      this.active = index;
    }
  }

};

</script>
