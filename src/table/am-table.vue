<template>

<table class="am-table" v-class="am-table-bordered:bordered, am-table-radius:radius, am-table-striped:striped, am-table-hover:hover, am-table-compact:compact">
  <thead>
    <tr>
      <th v-repeat="headers">{{ $value }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-repeat="item in items">
      <td v-repeat="item">{{ $value }}</td>
    </tr>
  </tbody>
</table>
  
</template>

<script>
  
module.exports = {
  
  props: ['items', 'headers', 'bordered', 'radius', 'striped', 'hover', 'compact'],
  
  data: function() {
    return {
      bordered: false,
      radius: false,
      striped: false,
      hover: false,
      compact: false
    };
  }
  
};
  
</script>
