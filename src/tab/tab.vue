<template>

<div class="am-tabs">
  <ul class="am-tabs-nav am-nav am-nav-tabs" :class="{'am-nav-justify': justify}">
    <li :class="{'am-active': $index === active}" v-for="tab in items"><a href="javascript:;" @click="tabTo($index)">{{ tab.title }}</a></li>
  </ul>

  <div class="am-tabs-bd">
    <div class="am-tab-panel" :class="{'am-active': $index === active}" v-for="tab in items">{{ tab.content }}</div>
  </div>
</div>

</template>

<script>

export default {

  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Number,
      default: 0
    },
    justify: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    tabTo(index) {
      this.active = index;
      this.$dispatch('tab');
    }
  }

};

</script>
