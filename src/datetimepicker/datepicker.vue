<template>

<div class="am-datepicker-body">
  <days-picker v-bind:selected-date.sync="selectedDate" v-bind:view-date.sync="viewDate" v-show="show.days"></days-picker>
  <months-picker v-bind:selected-date.sync="selectedDate" v-bind:view-date.sync="viewDate" v-show="show.months"></months-picker>
  <years-picker v-bind:selected-date.sync="selectedDate" v-bind:view-date.sync="viewDate" v-show="show.years"></years-picker>
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

  created() {
    this.viewDate = new Date(this.selectedDate.valueOf());
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
      },
      viewDate: new Date()
    };
  },

  events: {
    "view-change"(show) {
      this.show = show;
    }
  }
};

</script>
