<template>

<div class="am-datepicker-body">
  <days-picker :selectedDate.sync="selectedDate" v-show="show.days"></days-picker>
  <months-picker :selectedDate.sync="selectedDate" v-show="show.months"></months-picker>
  <years-picker :selectedDate.sync="selectedDate" v-show="show.years"></years-picker>
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
  },

  data() {
    return {
      show: {
        days: true,
        months: false,
        years: false
      }
    };
  },

  events: {
    "view-change"(show) {
      this.show = show;
    }
  }
};

</script>
