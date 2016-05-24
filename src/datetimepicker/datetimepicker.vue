<template>

<div class="am-datepicker">
  <div class="am-datepicker-caret" v-if="caretDisplayed"></div>
  <div class="am-datepicker-date" v-if="showDatePicker" v-show="show.date">
    <date-picker v-bind:selected-date.sync="dateTime">
  </div>
  <div class="am-datepicker-time" v-if="showTimePicker" v-show="show.time">
    <time-picker v-bind:selected-date.sync="dateTime" v-on:viewchange="handleViewChange">
  </div>
  <div class="am-datepicker-toggle" v-if="showDatePicker&&showTimePicker" v-show="show.date" v-on:click="handleToggleTime">
    <icon name="clock-o"></icon>
  </div>
  <div class="am-datepicker-toggle" v-if="showDatePicker&&showTimePicker" v-show="show.time" v-on:click="handleToggleDate">
    <icon name="calendar"></icon>
  </div>
</div>

</template>

<style>

.am-datepicker {
  display: block;
}

</style>

<script>

import utils from '../utils';
import icon from '../icon/icon.vue';
import datePicker from './datepicker.vue';
import timePicker from './timepicker.vue';

export default {

  components: {
    datePicker,
    timePicker
  },

  props: {
    dateTime: {
      type: Date,
      twoWay: true,
      default() {
        return new Date();
      }
    },
    showTimePicker: {
      type: Boolean,
      default: true
    },
    showDatePicker: {
      type: Boolean,
      default: true
    },
    caretDisplayed: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm'
    },
    amStyle: {
      type: String,
      default: '',
      validator(style) {
        return /success|danger|warning|/.test(style);
      }
    },
    minDate: {
      type: String,
      default: ''
    },
    maxDate: {
      type: String,
      default: ''
    }
  },

  compiled() {
    this.show.date = this.showDatePicker;
    this.show.time = !this.showDatePicker && this.showTimePicker;
  },

  data() {
    return {
      show: {
        date: true,
        time: false
      }
    };
  },

  methods: {

    handleToggleTime() {
      this.show.date = false,
      this.show.time = true;
    },

    handleToggleDate() {
      this.show.date = true,
      this.show.time = false;
    },

    handleViewChange(show) {
      this.show.date = show.date && this.showDatePicker;
      this.show.time = show.time || !this.showDatePicker && this.showTimePicker;
    }
  }

};

</script>
