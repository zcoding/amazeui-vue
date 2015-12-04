<template>

<div class="am-datepicker">
  <div class="am-datepicker-caret" v-if="caretDisplayed"></div>
  <div class="am-datepicker-date" v-if="showDatePicker">
    <date-picker v-bind:selected-date.sync="dateTime">
  </div>
  <div class="am-datepicker-time" v-if="showTimePicker">
    <time-picker v-bind:selected-date.sync="dateTime">
  </div>
  <div class="am-datepicker-toggle" v-show="showDatePicker" v-on:click="handleToggleTime">
    <icon name="clock-o">
  </div>
  <div class="am-datepicker-toggle" v-show="showTimePicker" v-on:click="handleToggleDate">
    <icon name="calendar">
  </div>
</div>

</template>

<style lang="stylus">

.am-datepicker
  display block

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
    onSelect: {
      type: Function,
      default: utils.noop
    },
    onClose: {
      type: Function,
      default: utils.noop
    },
    showTimePicker: {
      type: Boolean,
      default: false
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

  data() {
  },

  methods: {
    subtract() {},

    showFunc() {},

    add() {},

    handleToggleTime() {
      this.showDatePicker = false,
      this.showTimePicker = true;
    },

    handleToggleDate() {
      this.showDatePicker = true,
      this.showTimePicker = false;
    }
  }

};

</script>
