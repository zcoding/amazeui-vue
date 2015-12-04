<template>

<div class="am-datepicker-body">
  <div class="am-datepicker-time-wrapper" v-show="show.wrapper">
    <table class="am-datepicker-table">
      <thead>
      <tr class="am-datepicker-header">
        <th class="am-datepicker-prev" v-on:click="prevMinute">
          <i class="am-datepicker-prev-icon"></i>
        </th>
        <th class="am-datepicker-switch" colspan="5" v-on:click="showDate">
          <div class="am-datepicker-select">today</div>
        </th>
        <th class="am-datepicker-next" v-on:click="nextMinute">
          <i class="am-datepicker-next-icon"></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colspan="7">
          <div class="am-datepicker-time-box">
            <strong v-on:click="showHours">{{ time.hour }}</strong><em>:</em><strong v-on:click="showMinutes">{{ time.minute }}</strong>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <hours-picker v-bind:selected-date.sync="selectedDate" v-bind:view-date.sync="viewDate" v-show="show.hours"></hours-picker>
  <minutes-picker v-bind:selected-date.sync="selectedDate" v-bind:view-date.sync="viewDate" v-show="show.minutes"></minutes-picker>
</div>

</template>

<script>

import minutesPicker from './minutespicker.vue';
import hoursPicker from './hourspicker.vue';

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

  data() {
    return {
      show: {
        wrapper: true,
        hours: false,
        minutes: false
      },
      viewDate: new Date()
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
      this.show = {
        wrapper: false,
        hours: true,
        minutes: false
      };
    },

    showMinutes() {
      this.show = {
        wrapper: false,
        hours: false,
        minutes: true
      };
    },

    prevMinute() {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setMinutes(newDate.getMinutes() - 1);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
    },

    nextMinute() {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setMinutes(newDate.getMinutes() + 1);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
    },

    showDate() {}
  }

};

</script>
