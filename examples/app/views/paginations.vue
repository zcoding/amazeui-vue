<template>

<grid>
  <column v-bind:sm="12">
    <pagination v-bind:page="2" v-bind:total="10" v-bind:link="createLink" left></pagination>
  </column>
  <column v-bind:sm="12">
    <pagination v-bind:page="5" v-bind:total="10" v-bind:link="createLink" centered></pagination>
  </column>
  <column v-bind:sm="12">
    <pagination v-bind:page="8" v-bind:total="10" v-bind:link="createLink" right></pagination>
  </column>
</grid>

</template>

<script>

module.exports = {

  methods: {
    createLink: function(p) {
      return '/paginations?page=' + p;
    }
  }
};

</script>
