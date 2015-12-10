<template>

<div class="am-datepicker-minutes">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" v-on:click="prevMinute">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5">
        <div class="am-datepicker-select">{{ showText.hour + ':' + showText.minute }}</div>
      </th>
      <th class="am-datepicker-next" v-on:click="nextMinute">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="7">
        <span class="am-datepicker-minute" v-for="m in minutes" v-on:click="setSelectedMinute(m)" v-text="m.show < 10 ? m.hour + ':0' + m.show : m.hour + ':' + m.show"></span>
      </td>
    </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {

  props: {
    selectedDate: {
      twoWay: true,
      required: true
    },
    viewDate: {
      twoWay: true,
      required: true
    }
  },

  computed: {
    showText() {
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

    minutes() {
      var minute = this.selectedDate.getMinutes();
      var hour = this.selectedDate.getHours();
      var minutes = [];
      for (var i = 0; i < 60; ++i) {
        var _minute = {
          hour: hour,
          show: i,
          isActive: false
        };
        if (i === minute) {
          _minute.isActive = true;
        }
        if (i % 5 === 0) {
          minutes.push(_minute);
        }
      }
      return minutes;
    }
  },

  methods: {
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

    setSelectedMinute(minute) {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setMinutes(minute.hour);
      newDate.setMinutes(minute.show);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
      this.$dispatch('view-change', {
        wrapper: true,
        hours: false,
        minutes: false
      });
    }
  }

};

</script>
