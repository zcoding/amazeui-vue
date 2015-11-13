<template>

<div class="am-datepicker-body">
  <days-picker :selectedDate.sync="selectedDate">
  <months-picker>
  <years-picker>
</div>

</template>

<script>

import daysPicker from './dayspicker.vue';
import monthsPicker from './monthspicker.vue';
import yearsPicker from './yearspicker.vue';

export default {
  props: {
    selectedDate: {
      twoWay: true,
      default() {
        return new Date();
      }
    }
  },
  components: {
    daysPicker,
    monthsPicker,
    yearsPicker
  }
};

</script>
