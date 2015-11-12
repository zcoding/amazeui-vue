<template>

<div class="am-datepicker-body">
  <days-picker>
  <months-picker>
  <years-picker>
</div>

</template>

<script>

import daysPicker from './dayspicker.vue';
import monthsPicker from './monthspicker.vue';
import yearsPicker from './yearspicker.vue';

export default {
  components: {
    daysPicker,
    monthsPicker,
    yearsPicker
  }
};

</script>
