<template>

<div class="am-tabs" v-el="tab">
  <ul class="am-tabs-nav am-nav am-nav-tabs">
    <li v-class="am-active: $index === active" v-repeat="tab in tabs"><a href="javascript:;" v-on="click: tabTo($index)">{{ tab.title }}</a></li>
  </ul>

  <div class="am-tabs-bd">
    <div class="am-tab-panel" v-class="am-active: $index === active" v-repeat="tab in tabs">{{ tab.content }}</div>
  </div>
</div>

</template>

<script>

module.exports = {

  props: ['tabs'],

  data: function() {
    return {
      active: 1
    };
  },

  methods: {
    tabTo: function(index) {
      this.active = index;
    }
  }

};

</script>
