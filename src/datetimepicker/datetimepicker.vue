<template>

<div class="am-datepicker">
  <div class="am-datepicker-caret" v-if="caretDisplayed"></div>
  <div class="am-datepicker-date" v-show="showDatePicker">
    <date-picker>
  </div>
  <div class="am-datepicker-time" v-show="showTimePicker">
    <time-picker>
  </div>
  <div class="am-datepicker-toggle" v-show="showDatePicker" @click="handleToggleTime">
    <icon name="clock-o">
  </div>
  <div class="am-datepicker-toggle" v-show="showTimePicker" @click="handleToggleDate">
    <icon name="calendar">
  </div>
</div>

</template>

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
      type: String,
      default: new Date().toString()
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
      default: true
    },
    showDatePicker: {
      type: Boolean,
      default: true
    },
    caretDisplayed: {
      type: Boolean,
      default: true
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
    return {};
  },

  methods: {
    subtract() {},

    showFunc() {},

    add() {},

    handleToggleTime() {
      this.showDatePicker = true,
      this.showTimePicker = false;
    },

    handleToggleDate() {}
  }

};

</script>
