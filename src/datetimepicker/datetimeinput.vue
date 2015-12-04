<template>

<div class="am-form-group">
  <input type="text" class="am-form-field" v-on:focus="show=true" v-on:blur="show=false">
</div>
<date-time-picker v-if="show" v-bind:caret-displayed="true" style="top:39px;left:15px;position:absolute;z-index:1120;"></date-time-picker>

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
