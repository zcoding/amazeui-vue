<template>

<table class="am-table am-table-bordered am-table-radius">
  <thead>
    <tr>
      <th v-for="h in headers" v-on:click="sort($index, h)">{{ h }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="rows in datas">
      <td v-for="v in rows">{{ v }}</td>
    </tr>
  </tbody>
</table>

</template>

<script>

export default {
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      }
    },
    datas: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    sort(index, header) {
      console.log(index);
    }
  }
};

</script>
