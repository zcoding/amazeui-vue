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
          <div class="am-datepicker-select">{{ dateShow }}</div>
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
      type: Date,
      twoWay: true,
      required: true
    }
  },

  data() {
    var viewDate = new Date(this.selectedDate.valueOf());
    return {
      show: {
        wrapper: true,
        hours: false,
        minutes: false
      },
      viewDate: viewDate
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
    },
    dateShow() {
      var viewDate = this.viewDate;
      var year = viewDate.getFullYear();
      var month = viewDate.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      var date = viewDate.getDate();
      if (date < 10) {
        date = '0' + date;
      }
      return  `${year}-${month}-${date}`;
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

    showDate() {
      this.$dispatch('viewchange', {
        date: true,
        time: false
      });
    }
  },

  events: {
    "view-change"(show) {
      this.show = show;
    }
  }

};

</script>
