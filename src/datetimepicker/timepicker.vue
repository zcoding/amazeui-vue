<template>

<div class="am-datepicker-body">
  <div class="am-datepicker-time-wrapper">
    <table class="am-datepicker-table">
      <thead>
      <tr class="am-datepicker-header">
        <th class="am-datepicker-prev" @click="subtractMinute">
          <i class="am-datepicker-prev-icon"></i>
        </th>
        <th class="am-datepicker-switch" colspan="5" @click="showDate">
          <div class="am-datepicker-select">today</div>
        </th>
        <th class="am-datepicker-next" @click="addMinute">
          <i class="am-datepicker-next-icon"></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colspan="7">
          <div class="am-datepicker-time-box">
            <strong @click="showHours">{{ time.hour }}</strong><em>:</em><strong @click="showMinutes">{{ time.minute }}</strong>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <hours-picker>
  <minutes-picker>
</div>

</template>

<script>

import minutesPicker from './minutespicker.vue';
import hoursPicker from './hourspicker.vue';

export default {

  data() {
    return {
      time: {
        hour: '12',
        minute: '12'
      }
    };
  },

  components: {
    minutesPicker,
    hoursPicker
  },

  methods: {
    showHours() {},

    showMinutes() {},

    subtractMinute() {},

    addMinute() {},

    showDate() {}
  }

};

</script>
