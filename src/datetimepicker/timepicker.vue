<template>

<div class="am-datepicker-body">
  <div class="am-datepicker-time-wrapper">
    <table class="am-datepicker-table">
      <thead>
      <tr class="am-datepicker-header">
        <th class="am-datepicker-prev" @click="prevMinute">
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
  <hours-picker v-show="show.hours"></hours-picker>
  <minutes-picker v-show="show.minutes"></hours-picker>
</div>

</template>

<script>

import minutesPicker from './minutespicker.vue';
import hoursPicker from './hourspicker.vue';

export default {

  data() {
    return {
      show: {
        hours: false,
        minutes: false
      },
      viewDate: new Date(),
      selectedDate: new Date()
    };
  },

  computed: {
    time() {
      var hour = this.viewDate.getHours();
      var minute = this.viewDate.getMinutes();

      if (minute < 10) {
        minute = '0' + minute;
      }

      if (hour < 10) {
        hour = '0' + hour;
      }

      return {
        hour: hour,
        minute: minute
      };
    }
  },

  components: {
    minutesPicker,
    hoursPicker
  },

  methods: {
    showHours() {
    },

    showMinutes() {},

    prevMinute() {
      var viewDate = this.viewDate;

      viewDate.setMinutes(viewDate.getMinutes() - 1);

      this.selectedDate = new Date(viewDate.valueOf());
    },

    addMinute() {},

    showDate() {}
  }

};

</script>
