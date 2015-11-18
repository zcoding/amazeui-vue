<template>

<grid>
  <column :sm="12">
    <breadcrumb :menu="[{name:'Home',link:'/'},{name:'Components',link:'/'}]"></breadcrumb>
    <breadcrumb :menu="[{name:'首页',link:'/'},{name:'组件',link:'/'}]" slash></breadcrumb>
  </column>
</grid>

</template>

<script>

module.exports = {

};

</script>
