<template>

<breadcrumb :menu="[{name:'首页',link:'/'},{name:'内容',link:'/'}]"></breadcrumb>

<breadcrumb :menu="[{name:'首页',link:'/'},{name:'内容',link:'/'}]" slash></breadcrumb>

</template>

<script>

var amaze = require('amaze');

module.exports = {

  components: {
    breadcrumb: amaze.breadcrumb
  }

};

</script>
