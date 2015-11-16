<template>

<div class="am-form-group">
  <input type="text" class="am-form-field">
</div>
<date-time-picker v-show="show"></date-time-picker>

</template>

<script>

import dateTimePicker from './datetimepicker.vue';

export default {
  components: {
    dateTimePicker
  },

  data() {
    return {
      show: false
    };
  }
};

</script>
