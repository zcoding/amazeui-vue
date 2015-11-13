<template>

<ol class="am-breadcrumb" :class="{'am-breadcrumb-slash': slash}">
  <li v-for="item in menu" :class="{'am-active': $index===menu.length-1}"><a v-link="{path: item.link}">{{ item.name }}</a></li>
</ol>

</template>

<script>

module.exports = {

  props: {
    slash: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      },
      required: true
    }
  }

};

</script>
