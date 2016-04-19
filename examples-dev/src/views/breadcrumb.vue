<template>

<grid>
  <column v-bind:sm="12">
    <breadcrumb v-bind:menu="[{name:'Home',link:'/'},{name:'Components',link:'/'}]"></breadcrumb>
    <breadcrumb v-bind:menu="[{name:'首页',link:'/'},{name:'组件',link:'/'}]" slash></breadcrumb>
  </column>
</grid>

</template>

<script>

module.exports = {

};

</script>
