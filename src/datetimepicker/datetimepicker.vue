<template>

<div class="am-datepicker">
  <div class="am-datepicker-caret"></div>
  <div class="am-datepicker-date">
    <date-picker
      onClose={this.props.onClose}
      weekStart={this.props.weekStart}
      viewMode={this.props.viewMode}
      minViewMode={this.props.minViewMode}
      daysOfWeekDisabled={this.props.daysOfWeekDisabled}
      format={this.props.format}
      date={this.state.date}
      locale={this.props.locale}
      minDate={this.props.minDate}
      maxDate={this.props.maxDate}>
  </div>
  <div class="am-datepicker-time">
    <time-picker
      onSelect={this.handleSelect}
      date={this.state.date}
      format={this.props.format}>
  </div>
  <div class="am-datepicker-toggle" @click="handleToggleTime">
    <icon name="clock-o">
  </div>
  <div class="am-datepicker-toggle" @click="handleToggleDate">
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
      default: ''
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

    handleToggleTime() {},

    handleToggleDate() {}
  }

};

</script>
