<template>

<grid>
  <column v-bind:sm="12">
    <data-table v-bind:headers="headers" v-bind:datas="datas"></data-table>
  </column>
</grid>

</template>

<script>

import dataTable from 'amazeui-vue/src/datatable/datatable.vue';

export default {
  components: {
    dataTable
  },
  data() {
    return {
      headers: ['A', 'B', 'C'],
      datas: [[1, 2, 3], [2, 1, 3], [1, 3, 2]]
    };
  }
};

</script>
