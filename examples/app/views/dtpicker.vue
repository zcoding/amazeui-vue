<template>

<grid>
  <column :sm="12" :md="12">
    <date-time-picker></date-time-picker>
  </column>
</grid>

</template>

<script>

import dateTimePicker from 'amazeui-vue/datetimepicker/datetimepicker.vue';

export default {

  components: {
    dateTimePicker: dateTimePicker
  }

};

</script>
