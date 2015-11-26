<template>

<ul class="am-nav" :class="{'am-nav-pills': pills, 'am-nav-tabs': tabs, 'am-nav-justify': justify}">
  <li v-for="item in items" :class="{'am-active': item.active}"><a v-link="item.link">{{ item.text }}</a></li>
</ul>

</template>

<script>

export default {

  props: {
    pills: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }

};

</script>
