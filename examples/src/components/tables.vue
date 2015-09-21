<template>
  
<am-table headers="{{ headers }}" items="{{ items }}" bordered="true"></am-table>

</template>

<script>
  
module.exports = {
  
  components: {
    "amTable": require('../../../src/table/am-table.vue')
  },
  
  data: function() {
    return {
      headers: ['A', 'B', 'C'],
      items: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 0, 0]]
    };
  }
  
};
  
</script>
