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
  
  props: {
    "bordered": {
      type: Boolean,
      default: false
    },
    "radius": {
      type: Boolean,
      default: false
    },
    "striped": {
      type: Boolean,
      default: false
    },
    "hover": {
      type: Boolean,
      default: false
    },
    "compact": {
      type: Boolean,
      default: false
    },
    "items": {
      type: Array,
      default: function() {
        return [];
      }
    },
    "headers": {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  
  data: function() {
    return {
    };
  }
  
};
  
</script>
